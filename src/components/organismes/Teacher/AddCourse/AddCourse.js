import React, { Component } from 'react';
import axios from 'axios';
import {
  Row,
  Col,
  Button,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
  Progress,
} from 'reactstrap';
import { connect } from 'react-redux';
import { reduxForm, Field, Fields, formValueSelector, FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';

import ENV from '../../../../constants/environment/environment';
import { createInitFormData, createUpdateValue } from '../../../../redux/form/helpers';
import AddCourseMlc from '../../../molecules/Course/AddCourse/AddCourse';

import './styles.scss';

export const formName = 'addCourse';
const initFormData = createInitFormData(formName);
const updateValue = createUpdateValue(formName);

const RESOURCE = '/course';

const postCourse = payload => axios.post(ENV.apiUrl + `${RESOURCE}/`, payload);

export const subFormInitialValues = () => ({
  title: '',
  // teachers: [],
  steps: [],
});

class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
    this.updateValueForm = this.updateValueForm.bind(this);
    this.handlePondFile = this.handlePondFile.bind(this);
    this.onValidate = this.onValidate.bind(this);
    this.storeInState = this.storeInState.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(initFormData({ ...subFormInitialValues() }));
  }

  async onValidate(data) {
    const payload = {
      teachers: this.props.auth.teacherUUID,
      ...data,
    };
    console.log('payload==>', { payload });
    postCourse(payload)
      .then(res => {
        console.log(res);
        toast.success('Success');
      })
      .catch(error => {
        console.error(error);
      });
  }

  handlePondFile(file) {
    console.log('File added', file);
  }
  updateValueForm(fieldName, value) {
    this.props.dispatch(updateValue(fieldName, value));
  }
  storeInState(value) {
    const newFiles = this.state.files.concat(value);
    this.setState({
      files: newFiles,
    });
  }

  render() {
    return (
      <div className="MainContainerAddCourse">
        <AddCourseMlc
          updateValueFunction={this.updateValueForm}
          handlePondFileFunction={this.handlePondFile}
          onValidateFunction={this.onValidate}
          storeInStateFunction={this.storeInState}
          {...this.props}
        />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover={false}
        />
      </div>
    );
  }
}

const selector = formValueSelector(formName);

const mapDispatchToProps = {};
const mapStateToProps = state => ({
  auth: state.auth.user,
  formValues: {
    title: selector(state, 'title'),
    teachers: selector(state, 'teachers'),
    duration: selector(state, 'duration'),
    steps: selector(state, 'steps'),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: formName,
  })(AddCourse)
);

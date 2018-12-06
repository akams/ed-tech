import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { createInitFormData } from '../../../redux/form/helpers';
import SignUpTeacherMlc from '../../molecules/SignUp/SignUpTeacher';
import SuccessSignUpTeacher from './SuccessSignUp/SuccessSignUpTeacher';

import { dispatchSignUpTeacher } from '../../../redux/action/user';

import './styles.scss';

const formName = 'signup-teacher';
export const initFormData = createInitFormData(formName);

const formToAPi = data => {
  return {
    email: data.username,
    password: data.password,
  };
};

class SignUpTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
    };
    this.onValidate = this.onValidate.bind(this);
  }

  // Execute the calls when componnent mounts
  componentDidMount() {}

  async onValidate(data) {
    console.log({ data });
    this.props
      .dispatchSignUpTeacherFunction(data)
      .then(result => {
        this.setState({ success: true });
      })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div className="MainSignUp">
        <Container>
          {!this.state.success && (
            <SignUpTeacherMlc onValidateFunction={this.onValidate} {...this.props} />
          )}
          {this.state.success && <SuccessSignUpTeacher />}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = {
  dispatchSignUpTeacherFunction: user => dispatchSignUpTeacher(user),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: formName,
  })(SignUpTeacher)
);

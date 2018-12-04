import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { createInitFormData } from '../../../redux/form/helpers';
import SignUpMlc from '../../molecules/SignUp/SignUp';

import { dispatchSignUpStudent } from '../../../redux/action/auth';

import './styles.scss';

const formName = 'signup';
export const initFormData = createInitFormData(formName);

const formToAPi = data => {
  return {
    email: data.username,
    password: data.password,
  };
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onValidate = this.onValidate.bind(this);
  }

  // Execute the calls when componnent mounts
  componentDidMount() {}

  async onValidate(data) {
    console.log({ data });
    this.props
      .dispatchSignUpUserFunction(data)
      .then(result => {
        console.log(result);
      })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div className="MainSignUp">
        <Container>
          <SignUpMlc onValidateFunction={this.onValidate} {...this.props} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = {
  dispatchSignUpUserFunction: user => dispatchSignUpStudent(user),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: formName,
  })(SignUp)
);
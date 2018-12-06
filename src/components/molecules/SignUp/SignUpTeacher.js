import React, { Component } from 'react';
import { Button, Form, FormGroup } from 'reactstrap';
import { Field } from 'redux-form';
import renderInputReduxForm from '../../atomes/Input/Input';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Execute the calls when componnent mounts
  componentDidMount() {}

  render() {
    return (
      <div style={{ paddingTop: '10%' }}>
        <div>
          <h1>Formulaire</h1>
        </div>
        <Form onSubmit={this.props.handleSubmit(this.props.onValidateFunction)}>
          <FormGroup>
            <Field
              name="firstName"
              type="text"
              label="Nom"
              placeholder="Nom"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="lastName"
              type="text"
              label="Prenom"
              placeholder="Prénom"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="username"
              type="text"
              label="Username"
              placeholder="Username"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="password"
              type="password"
              label="Password"
              typeLabel="password"
              placeholder="password"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="birthDate"
              type="text"
              label="birthDate"
              placeholder="birthDate"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="email"
              type="email"
              label="email"
              placeholder="email"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="phoneNumber"
              type="text"
              label="phoneNumber"
              placeholder="Numéro de téléphone"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="country"
              type="text"
              label="country"
              placeholder="country"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="city"
              type="text"
              label="city"
              placeholder="city"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="cp"
              type="text"
              label="CP"
              placeholder="code postal"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="address"
              type="text"
              label="address"
              placeholder="address"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="degree"
              type="text"
              label="degree"
              placeholder="Type Diplome {Master, Doctorat/PhD}"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="qualification"
              type="text"
              label="qualification"
              placeholder="Compétence Ex: Physique, Mathématique, Biostatistics"
              component={renderInputReduxForm}
            />
          </FormGroup>
          Add CV / LettreMotiv.
          <Button>Envoyer</Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;

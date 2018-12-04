import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Field } from 'redux-form';
import renderInputReduxForm from '../../atomes/Input/Input';

// {
//   firstName: 'ndjawe',
//   lastName: 'Eric',
//   username: 'ricoooo',
//   password: 'Erfe1',
//   birthDate: '07/07/1992',
//   email: 'eric.ndjawe@gmail.com',
//   geoloc: {
//     country: 'Gabon',
//     city: 'Libreville',
//     CP: 'BP8999',
//     address: '',
//   },
//   billing: {
//     status: 'IN_PROGRESS',
//     type: 1,
//   },
//   subscribeYear: {
//     degree: 'L1',
//     promoYear: '2020',
//   },
// }

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
              name="type"
              type="text"
              label="type"
              placeholder="Type facturation {1-2-3}"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="degree"
              type="text"
              label="degree"
              placeholder="degree {L1-L...}"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="promoYear"
              type="text"
              label="promoYear"
              placeholder="promoYear {2019/2020}"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> Check me out
            </Label>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;

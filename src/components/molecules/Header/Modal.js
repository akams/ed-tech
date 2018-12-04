import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { Field } from 'redux-form';
import renderInputReduxForm from '../../atomes/Input/Input';

export const renderModal = (
  modal,
  toggleModalFunction,
  handleSubmitFunction,
  onValidateFunction
) => {
  return (
    <Modal isOpen={modal} toggle={toggleModalFunction}>
      <ModalHeader toggle={toggleModalFunction}>Connexion</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmitFunction(onValidateFunction)}>
          <FormGroup>
            <Field
              name="idAccount"
              type="text"
              label="Identifiant compte"
              placeholder="Identifiant compte"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="username"
              type="text"
              label="Identifiant"
              placeholder="identifiant"
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
          <Button>Envoyer</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

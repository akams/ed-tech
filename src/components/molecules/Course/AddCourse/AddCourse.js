import React, { Component } from 'react';
import { Row, Col, Button, Container, Form, FormGroup, Label } from 'reactstrap';
import { Field, FieldArray } from 'redux-form';

import renderInputReduxForm from '../../../atomes/Input/Input';
import { renderStepsContentSubForm } from './StepGroupComponent';

import './styles.scss';

class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="MainContainerAddCourse">
        <Container>
          <Form onSubmit={this.props.handleSubmit(this.props.onValidateFunction)}>
            <Row>
              <Col sm="12">
                <FormGroup row>
                  <Label for="title" sm={2}>
                    Titre
                  </Label>
                  <Col sm={10}>
                    <Field
                      name="title"
                      id="title"
                      type="text"
                      placeholder="titre"
                      component={renderInputReduxForm}
                    />
                  </Col>
                </FormGroup>
                {/* <FormGroup row>
                  <Label for="teachers" sm={2}>
                    Professeur
                  </Label>
                  <Col sm={7}>
                    <Field
                      name="teachers"
                      id="teacher"
                      placeholder="Choisir le professeur"
                      child={[{ value: 1 }, { value: 2 }, { value: 3 }]}
                      component={renderSelectInputReduxForm}
                    />
                  </Col>
                  <Label for="examplePassword" sm={3}>
                    Me l'affecter
                  </Label>
                </FormGroup> */}
                <FieldArray name="steps" component={renderStepsContentSubForm} {...this.props} />
              </Col>
            </Row>
            <Row className="addBorder">
              <Col sm={{ size: 10, offset: 1 }}>
                <Button>Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AddCourse;

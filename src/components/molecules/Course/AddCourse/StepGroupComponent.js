import React from 'react';
import { Row, Col, Label, Button } from 'reactstrap';
import { Field, FieldArray } from 'redux-form';
import { FilePond } from 'react-filepond';

import renderInputReduxForm from '../../../atomes/Input/Input';
import './styles.scss';
import addSignPlus from '../../../../assets/teacher/add-sign-plus.svg';

const renderDocuments = ({ fields, meta: { error }, currentStep, ...rest }) => {
  return (
    <div className="addBorder">
      <FilePond
        name="images"
        // onupdatefiles={rest.handlePondFile}
        onupdatefiles={fileItems => {
          fileItems.map(fileItem => {
            console.log('fileItem.file==>', fileItem.file);
            rest.storeInStateFunction(fileItem.file);
          });
        }}
        allowMultiple={true}
        server="http://localhost:3001/api/v1/course/upload-file?infUser=test"
      />
      {/* {fields.map((document, index) => {
        console.log({ document });
        let component;
        if (
          notEmpty &&
          currentStep.documents[index] &&
          currentStep.documents[index].typeDoc &&
          currentStep.documents[index].typeDoc.value === 1
        ) {
          component = <input type="file" onChange={e => console.log(e.target.files)} />;
        } else if (
          notEmpty &&
          currentStep.documents[index] &&
          currentStep.documents[index].typeDoc &&
          currentStep.documents[index].typeDoc.value !== 1
        ) {
          component = <input type="text" onChange={e => console.log(e.target.files)} />;
        }
        return (
          <Row key={index}>
            <Col sm="3">
              <Select
                options={[
                  { value: 1, label: 'Document' },
                  { value: 2, label: 'Video' },
                  { value: 3, label: 'Audio' },
                ]}
                onChange={value => rest.updateValueFunction(`${document}.typeDoc`, value)}
              />
            </Col>
            <Col sm="6">
              <Label for="title" sm={2}>
                Doc #{index + 1}
              </Label>
              <Col sm={10}>{component}</Col>
            </Col>
            <Col sm="1" style={{ textAlign: 'left' }}>
              <button
                type="button"
                className="btn btn-default btn-sm"
                title="Supprimer un document"
                onClick={() => fields.remove(index)}
              >
                <span className="glyphicon glyphicon-minus-sign" />
              </button>
            </Col>
          </Row>
        );
      })} */}
    </div>
  );
};

export function renderStepsContentSubForm({ fields, meta: { error, submitFailed }, ...rest }) {
  return (
    <div>
      <Row>
        <Col sm="4" />
        <Col sm="4" />
        <Col sm="4" style={{ textAlign: 'right' }}>
          <p>
            <Button
              outline
              color="primary"
              className="btn btn-default btn-sm"
              title="Ajouter des étapes sur le cours"
              alt="Ajouter des étapes sur le cours"
              onClick={() => fields.push({})}
            >
              Ajouter semaine{' '}
              <img
                src={addSignPlus}
                alt="un triangle aux trois côtés égaux"
                height="12px"
                width="12px"
              />
            </Button>
          </p>
        </Col>
      </Row>

      {fields.map((step, index) => (
        <div key={index}>
          <Row>
            <Col sm="6">
              <h4 style={{ textAlign: 'left' }}>Semaine #{index + 1}</h4>
            </Col>
            <Col sm="6" style={{ textAlign: 'right' }}>
              <p>
                <button
                  type="button"
                  className="btn btn-default btn-sm"
                  title="Remove Member"
                  onClick={() => fields.remove(index)}
                >
                  Supprimer semaine <span className="glyphicon glyphicon-remove" />
                </button>
              </p>
            </Col>
          </Row>
          <Row>
            <Label for={`title`} sm={2} style={{ textAlign: 'left' }}>
              Intitulé du cours
            </Label>
            <Col sm={10}>
              <Field
                name={`${step}.title`}
                type="text"
                component={renderInputReduxForm}
                id="title"
                placeholder="titre"
              />
            </Col>
          </Row>
          <FieldArray
            name={`${step}.documents`}
            component={renderDocuments}
            currentStep={rest.formValues.steps[index]}
            {...rest}
          />
        </div>
      ))}
    </div>
  );
}

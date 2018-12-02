import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Doctor from '../organismes/Doctor/Doctor';
import AddPatient from '../organismes/Doctor/AddPatient';

const DoctorRoute = () => (
  <Switch>
    <Route path="/" component={Doctor} />
    <Route exact path="/add-patient" component={AddPatient} />
  </Switch>
);

export default DoctorRoute;

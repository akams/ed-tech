import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListCourse from '../organismes/Course/ListCourse';
import DetailCourse from '../organismes/Course/DetailCourse';

const CourseRoute = () => (
  <Switch>
    <Route exact path="/" component={DetailCourse} />
  </Switch>
);

export default CourseRoute;

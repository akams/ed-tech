import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import HomeRoute from './HomeRoute';
import CourseRoute from './CourseRoute';
import SignUpRoute from './SignUpRoute';
import DetailCourse from '../organismes/Course/DetailCourse';

import './style/style.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeRoute} />
        <Route path="/signup" component={SignUpRoute} />
        <Route exact path="/mon-programme-scolaire" component={CourseRoute} />
        <Route exact path="/mon-programme-scolaire/detail" component={DetailCourse} />
      </Switch>
    );
  }
}

export default withRouter(Main);

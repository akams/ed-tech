import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import HomeRoute from './HomeRoute';
import CourseRoute from './CourseRoute';

import './style/style.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={CourseRoute} />
      </Switch>
    );
  }
}

export default withRouter(Main);

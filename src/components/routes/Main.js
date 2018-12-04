import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import HomeRoute from './HomeRoute';
import CourseRoute from './CourseRoute';
import SignUpRoute from './SignUpRoute';
import PrivateRoute from './PrivateRoute';
import DetailCourse from '../organismes/Course/DetailCourse';

import getHeaders from '../../constants/HeadersApi';
import { dispatchMeFromToken } from '../../redux/action/auth';

import './style/style.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.loadUserFromToken();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.status === 'authenticated' || this.props.auth.status === 'authenticated') {
      if (this.props.auth.accessToken || nextProps.auth.accessToken) {
        return;
      } else {
        this.loadUserFromToken();
      }
    }
    this.loadUserFromToken();
  }

  loadUserFromToken() {
    let token = sessionStorage.getItem('jwtToken');
    if (!token || token === '') {
      //if there is no token, dont bother
      return;
    }
    axios.defaults.headers = {
      ...axios.defaults.headers,
      ...getHeaders(token),
    };
    this.props.dispatchMeFromTokenFunction();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeRoute} />
        <Route path="/signup" component={SignUpRoute} />
        <PrivateRoute
          exact
          path="/mon-programme-scolaire"
          component={CourseRoute}
          auth={this.props.auth}
        />
        <PrivateRoute
          exact
          path="/mon-programme-scolaire/detail"
          component={DetailCourse}
          auth={this.props.auth}
        />
        {/* <Route exact path="/mon-programme-scolaire" component={CourseRoute} /> */}
        {/* <Route exact path="/mon-programme-scolaire/detail" component={DetailCourse} /> */}
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  dispatchMeFromTokenFunction: tokenFromStorage => dispatchMeFromToken(tokenFromStorage),
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);

import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

// ROUTES
import HomeRoute from './HomeRoute';
import SignUpRoute from './SignUpRoute';
import PrivateRoute from './PrivateRoute';
import StudentRoute from './StudentRoute';
import TeacherRoute from './TeacherRoute';

// COMPONENTS
import SignUpTeacher from '../organismes/SignUp/SignUpTeacher';

import getHeaders from '../../constants/HeadersApi';
import { decodeJwt } from '../../constants/jwt.utils';
import { dispatchMeFromToken } from '../../redux/action/auth';
import { dispatchMeFromTokenTeacher } from '../../redux/action/user';

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
    const user = decodeJwt(token);
    if (!!user && user.isStudent) {
      return this.props.dispatchMeFromTokenFunction();
    } else if (!!user && user.isTeacher) {
      return this.props.dispatchMeFromTokenTeacherFunction();
    }
  }

  render() {
    const { user } = this.props.auth;
    return (
      <Switch>
        <Route exact path="/" component={HomeRoute} />
        <Route path="/signup" component={SignUpRoute} />
        <Route exact path="/devenir-enseignant" component={SignUpTeacher} />
        {/** Student */}
        {!!user &&
          user.isStudent && (
            <PrivateRoute
              exact
              path="/etudiant/mon-programme-scolaire"
              component={StudentRoute}
              auth={this.props.auth}
            />
          )}

        {/** Login teacher */}
        {!!user &&
          user.isTeacher && (
            <PrivateRoute
              exact
              path="/enseignant/compte-enseignant"
              component={TeacherRoute}
              auth={this.props.auth}
            />
          )}

        {/** User Disconnect go to home */}
        {!!user === false && (
          <Route
            render={props => (
              <Redirect
                push
                to={{
                  pathname: '/',
                  state: { from: props.location },
                }}
              />
            )}
          />
        )}
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
  dispatchMeFromTokenTeacherFunction: tokenFromStorage =>
    dispatchMeFromTokenTeacher(tokenFromStorage),
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);

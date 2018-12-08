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
    this.state = {
      loaderUi: true,
    };
    this.loadUserFromToken = this.loadUserFromToken.bind(this);
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
      this.setState({
        loaderUi: false,
      });
      return;
    }
    axios.defaults.headers = {
      ...axios.defaults.headers,
      ...getHeaders(token),
    };
    const user = decodeJwt(token);
    if (!!user && user.isStudent) {
      return this.props
        .dispatchMeFromTokenFunction()
        .then(() => {
          this.setState({
            loaderUi: false,
          });
        })
        .catch(err => {
          console.error({ err });
          this.setState({
            loaderUi: false,
          });
        });
    } else if (!!user && user.isTeacher) {
      return this.props
        .dispatchMeFromTokenTeacherFunction()
        .then(() => {
          this.setState({
            loaderUi: false,
          });
        })
        .catch(err => {
          this.setState({
            loaderUi: false,
          });
          console.error({ err });
        });
    }
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        {this.state.loaderUi && (
          <div className="MainGlobalContainer row">
            <div className="loader-ui" />
          </div>
        )}

        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route path="/signup" component={SignUpRoute} />
          <Route exact path="/devenir-enseignant" component={SignUpTeacher} />
          {/** Student */}
          <PrivateRoute
            exact
            path="/etudiant/mon-programme-scolaire"
            component={StudentRoute}
            auth={this.props.auth}
            loaderPage={this.state.loaderUi}
            loadUserFromTokenFunction={this.loadUserFromToken}
          />
          {/** Teacher */}
          {/* <Route path="/enseignant" component={TeacherRoute} /> */}
          <PrivateRoute
            path="/enseignant"
            component={TeacherRoute}
            auth={this.props.auth}
            loaderPage={this.state.loaderUi}
            loadUserFromTokenFunction={this.loadUserFromToken}
          />
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
      </div>
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

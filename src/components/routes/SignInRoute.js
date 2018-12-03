import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../organismes/SignIn/SignIn';

const SignInRoute = () => (
  <Switch>
    <Route path="/" component={SignIn} />
  </Switch>
);

export default SignInRoute;

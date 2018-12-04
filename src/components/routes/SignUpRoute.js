import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../organismes/SignUp/SignUp';

const SignUpRoute = () => (
  <Switch>
    <Route path="/" component={SignUp} />
  </Switch>
);

export default SignUpRoute;

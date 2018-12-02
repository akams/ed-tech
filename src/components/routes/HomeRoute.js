import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../organismes/Home/Home';

const HomeRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default HomeRoute;

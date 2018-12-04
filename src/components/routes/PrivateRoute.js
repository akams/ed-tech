import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, auth, ...rest }) {
  console.log({ auth });
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            push
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

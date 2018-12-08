import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log('componentWillMount props', this.props);
    if (this.props.loaderPage === false) {
      this.props.loadUserFromTokenFunction();
    }
  }

  render() {
    const { component: Component, auth, loaderPage } = this.props;
    return (
      <Route
        render={props => auth.isAuthenticated && loaderPage === false && <Component {...props} />}
      />
    );
  }
}

// export default function PrivateRoute({ component: Component, auth, loaderPage, ...rest }) {
//   console.log({ auth, loaderPage });
//   return (
//     <Route
//       {...rest}
//       render={props => auth.isAuthenticated && loaderPage === false && <Component {...props} />}
//     />
// <Route
//   {...rest}
//   render={props =>
//     auth.isAuthenticated ? (
//       <Component {...props} />
//     ) : (
//       <Redirect
//         push
//         to={{
//           pathname: '/',
//           state: { from: props.location },
//         }}
//       />
//     )
//   }
// />
//   );
// }

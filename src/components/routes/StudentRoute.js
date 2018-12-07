import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

// COMPONENTS
import ListCourse from '../organismes/Course/ListCourse';
import DetailCourse from '../organismes/Course/DetailCourse';

import './style/style.scss';

class StudentRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {/* <Sidebar/> */}
            <main
              role="main"
              className="col-md-9 ml-sm-auto col-lg-10 px-4"
              style={{ marginTop: 10 }}
            >
              <Switch>
                <Route exact path="/etudiant/mon-programme-scolaire" component={ListCourse} />

                {/* Products */}
                <Route
                  exact
                  path="/etudiant/mon-programme-scolaire/detail/"
                  component={DetailCourse}
                />
                {/* NoMatch component:
                    <Route component={NoMatch} />*/}
              </Switch>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentRouter;

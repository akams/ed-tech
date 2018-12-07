import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

// COMPONENTS
import AddCourse from '../organismes/Teacher/AddCourse/AddCourse';

import './style/style.scss';

class TeacherRouter extends React.Component {
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
                <Route exact path="/enseignant/compte-enseignant" component={AddCourse} />
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

export default TeacherRouter;

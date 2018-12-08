import React, { Component } from 'react';
import { Container } from 'reactstrap';

import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',
      dbResponse: '',
    };
    this.goToSignIn = this.goToSignIn.bind(this);
  }

  goToSignIn() {
    return this.props.history.push({
      pathname: '/signup',
      state: {},
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header-back">
          <Container
            style={{
              position: 'relative',
              paddingTop: 150,
              paddingBottom: 86,
            }}
          >
            <div className="first-block">
              <h1>Des cours aux diplômes</h1>
              <h2>Formation 100 % en ligne</h2>
            </div>
            <div className="second-block">
              <button size="lg" onClick={this.goToSignIn}>
                Inscrivez-vous maintenant
              </button>
            </div>
          </Container>
        </div>
        <div>
          <Container>
            <div>
              <h1>Comment ca marche</h1>
              <h2>
                Formation 100 % en ligne auprès des meilleures universités et entreprises du monde
              </h2>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;

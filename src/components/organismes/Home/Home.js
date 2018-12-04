import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  Row,
  Col,
  Container,
  Button,
} from 'reactstrap';

import logo from '../../../logo.svg';

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

  // Execute the calls when componnent mounts
  componentDidMount() {
    this.callAPI();
    this.callDB();
  }

  // Go to API and check testAPI route for a response
  callAPI() {
    fetch('http://localhost:3001/api/v1/test/api')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  // Go to API and check testDB route for a response
  callDB() {
    fetch('http://localhost:3001/api/v1/test/db')
      .then(res => res.text())
      .then(res => this.setState({ dbResponse: res }))
      .catch(err => err);
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
        <p className="App-intro">{this.state.apiResponse}</p>
        <p className="App-intro">{this.state.dbResponse}</p>
      </div>
    );
  }
}

export default App;

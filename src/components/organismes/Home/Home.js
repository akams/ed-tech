import React, { Component } from 'react';
import logo from '../../../logo.svg';
import '../../../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',
      dbResponse: '',
    };
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
        <p className="App-intro">{this.state.dbResponse}</p>
      </div>
    );
  }
}

export default App;

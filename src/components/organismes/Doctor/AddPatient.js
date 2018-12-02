import React, { Component } from 'react';
import './style.scss';

class FormAddPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('ici bas');
    return (
      <div className="MainDoctor">
        <div>
          <h1>page doctor: add patient</h1>
        </div>
        <div>
          <div className="body">test 2</div>
        </div>
      </div>
    );
  }
}

export default FormAddPatient;

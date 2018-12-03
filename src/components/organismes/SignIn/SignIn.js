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

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Execute the calls when componnent mounts
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Container>
          <div>
            <h1>Comment ca marche</h1>
            <h2>
              Formation 100 % en ligne auprès des meilleures universités et entreprises du monde
            </h2>
          </div>
        </Container>
      </div>
    );
  }
}

export default SignIn;

import React, { Component } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Collapse,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  CardText,
  Row,
  Col,
  Media,
  Button,
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

// import Navs from '../../atomes/Navs/Navs';
import './styles.scss';

class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="MainContainerAddCourse">
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              .col-sm-12 .col-md-6 .offset-md-3
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AddCourse;

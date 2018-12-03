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

import Navs from '../../atomes/Navs/Navs';
import './style.scss';

class DetailCourse extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false, collapseWeekCourse: false };
    this.toggle = this.toggle.bind(this);
    this.toggleWeek = this.toggleWeek.bind(this);
  }

  navLinks = [
    {
      name: 'Mon compte',
      link: '/my-accompte',
    },
    {
      component: 'Dropdown',
      render: index => (
        <Dropdown key={index} nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle nav caret>
            Mes patients
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link to={`/Course/all-patient`}>Liste patients</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to={`/doctor/my-patients`}>Voir mes patients</Link>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <Link to={`/doctor/add-patient`}>Ajouter un patient</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ),
    },
    {
      name: 'Mes RDV',
      link: '/my-rdv',
    },
  ];

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  toggleWeek() {
    this.setState({ collapseWeekCourse: !this.state.collapseWeekCourse });
  }

  render() {
    return (
      <Container>
        <div style={{ padding: '30px 0' }}>
          <Row>
            <img
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/5e/b4ef8069b511e3ae92c39913bb30e0/Rprogramming.jpg?auto=format%2Ccompress&dpr=2&exp=-15&blur=10&bri=5&max-w=1000"
              width="100%"
              height={100}
            />
          </Row>
          <Row>
            <Col sm={3} style={{ paddingTop: 40 }}>
              <Navs navLinks={this.navLinks} />
            </Col>
            <Col sm={9} style={{ paddingTop: 40 }}>
              <div>
                <b>À propos de ce cours :</b> In this course you will learn how to program in R and
                how to use R for effective data analysis. You will learn how to install and
                configure software necessary for a statistical programming environment and describe
                generic programming language concepts as they are implemented in a high-level
                statistical language.
                <Collapse isOpen={this.state.collapse}>
                  The course covers practical issues in statistical computing which includes
                  programming in R, reading data into R, accessing R packages, writing R functions,
                  debugging, profiling R code, and organizing and commenting R code. Topics in
                  statistical data analysis will provide working examples.
                </Collapse>
                <span onClick={this.toggle}>
                  <u>{this.state.collapse ? 'Moins' : 'Plus'}</u>
                </span>
              </div>
              <hr className="cdp-rule" />
              <div>
                <Media>
                  <Media left>
                    <img
                      src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/f5/783878eec27e95d2fade6b62d9a62a/Peng_Roger.jpg?auto=format%2Ccompress&amp;dpr=1&amp;w=88&amp;h=88&amp;fit=crop"
                      srcSet="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/f5/783878eec27e95d2fade6b62d9a62a/Peng_Roger.jpg?auto=format%2Ccompress&amp;dpr=2&amp;w=88&amp;h=88&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/f5/783878eec27e95d2fade6b62d9a62a/Peng_Roger.jpg?auto=format%2Ccompress&amp;dpr=3&amp;w=88&amp;h=88&amp;fit=crop 3x"
                      alt="Roger D. Peng, PhD"
                      style={{ maxWidth: 88, maxHeight: 88, borderRadius: 50 }}
                    />
                  </Media>
                  <Media body>
                    <Media body>
                      Enseignant : Roger D. Peng, PhD, Associate Professor, Biostatistics
                    </Media>
                  </Media>
                </Media>
              </div>
              <hr className="cdp-rule" />
              <div>
                <h2>Programme de cours : </h2>
                <Card>
                  <CardHeader>Semaine 1</CardHeader>
                  <CardBody>
                    <CardTitle>Week 1: Background, Getting Started, and Nuts & Bolts</CardTitle>
                    <CardText>
                      This week covers the basics to get you started up with R. The Background
                      Materials lesson contains information about course mechanics and some videos
                      on installing R. The Week 1 videos cover the history of R and S, go over the
                      basic data types in R, and describe the functions for reading and writing
                      data. I recommend that you watch the videos in the listed order, but watching
                      the videos out of order isn't going to ruin the story.
                    </CardText>
                  </CardBody>
                </Card>
                <Collapse isOpen={this.state.collapseWeekCourse}>
                  <Card>
                    <CardHeader>Semaine 2</CardHeader>
                    <CardBody>
                      <CardTitle>Week 2: Background, Getting Started, and Nuts & Bolts</CardTitle>
                      <CardText>
                        This week covers the basics to get you started up with R. The Background
                        Materials lesson contains information about course mechanics and some videos
                        on installing R. The Week 1 videos cover the history of R and S, go over the
                        basic data types in R, and describe the functions for reading and writing
                        data. I recommend that you watch the videos in the listed order, but
                        watching the videos out of order isn't going to ruin the story.
                      </CardText>
                    </CardBody>
                  </Card>
                </Collapse>
                <Button color="primary" onClick={this.toggleWeek} style={{ marginBottom: '1rem' }}>
                  Voir le programme complet
                </Button>
              </div>
              <div>
                <Button color="primary" style={{ marginBottom: '1rem' }}>
                  Démarrer le programme
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default DetailCourse;

import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardFooter, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Navs from '../../atomes/Navs/Navs';
import './style.scss';

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('props', this.props);
    const { course } = this.props;

    return (
      <div style={{ padding: '30px 0' }}>
        <Row>
          <h2>{course.title}</h2>
        </Row>
        <Row>
          {course.trimestre.map((t, i) => (
            <Col
              sm={3}
              key={
                i //eslint-disable-line
              }
              style={{ paddingTop: 10, paddingBottom: 10 }}
            >
              <Card
                className={`CourseCard CourseCard-${i}`}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '1px 1px 10px 0px #cfcfcf')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
              >
                {t.img && (
                  <CardImg
                    top
                    width="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                )}
                <CardBody>
                  <CardTitle>{t.title}</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                </CardBody>
                <CardFooter className="text-muted">Footer</CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Course;

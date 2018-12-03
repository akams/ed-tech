import React, { Component } from 'react';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Navs from '../../atomes/Navs/Navs';
import Course from './Course';
import './style.scss';

class ListCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  course = [];

  componentDidMount() {
    this.course = [
      {
        title: 'Mon cours',
      },
    ];
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
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

  courses = [
    {
      title: 'Trimestre 1',
      trimestre: [
        {
          id: 1,
          title: 'Mathématique',
        },
        {
          id: 2,
          title: 'Physique',
        },
        {
          id: 3,
          title: 'Culture général',
        },
        {
          id: 4,
          title: 'Informatique',
        },
      ],
    },
    {
      title: 'Trimestre 2',
      trimestre: [
        {
          id: 1,
          title: 'Mathématique',
        },
        {
          id: 2,
          title: 'Physique',
        },
        {
          id: 3,
          title: 'Culture général',
        },
        {
          id: 4,
          title: 'Informatique',
        },
        {
          id: 5,
          title: 'SI: Optique',
        },
      ],
    },
    {
      title: 'Trimestre 3',
      trimestre: [
        {
          id: 1,
          title: 'Mathématique',
        },
        {
          id: 2,
          title: 'Physique',
        },
        {
          id: 3,
          title: 'Culture général',
        },
        {
          id: 4,
          title: 'Informatique',
        },
        {
          id: 5,
          title: 'SI: Optique',
        },
        {
          id: 6,
          title: 'SI: Electronique',
        },
      ],
    },
  ];

  render() {
    console.log('props', this.props);
    console.log('match', this.props.match);
    return (
      <div className="MainContainerListCourse">
        <Container>
          <div className="MainListCourse">
            {this.courses.map((c, i) => (
              <Course
                course={c}
                key={
                  i //eslint-disable-line
                }
                {...this.props}
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default ListCourse;

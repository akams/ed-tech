import React, { Component } from 'react';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import AddPatient from './AddPatient';

import Navs from '../../atomes/Navs/Navs';
import './style.scss';

class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
    this.toggle = this.toggle.bind(this);
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
              <Link to={`/doctor/all-patient`}>Liste patients</Link>
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

  render() {
    console.log('props', this.props);
    console.log('match', this.props.match);
    return (
      <div className="MainDoctor">
        <div>
          <h1>page doctor</h1>
        </div>
        <div>
          <Navs navLinks={this.navLinks} />
          <div className="body">test</div>
        </div>
      </div>
    );
  }
}

export default Doctor;

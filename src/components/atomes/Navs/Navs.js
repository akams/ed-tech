import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

/**
 * Example navLinks
 *
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
            <DropdownItem header>Header</DropdownItem> 
            <DropdownItem disabled>Action</DropdownItem> 
            <DropdownItem>Voir mes patients</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Ajouter un patient</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ),
    },
    {
      name: 'Mes RDV',
      link: '/my-rdv',
    },
  ];
 */

import './style.scss';

class Navs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navBlock">
        <Nav vertical pills>
          {this.props.navLinks.map((navE, i) => {
            if (!navE.component) {
              return (
                <NavItem
                  key={
                    i //eslint-disable-line
                  }
                >
                  <NavLink href="#">Mon compte</NavLink>
                </NavItem>
              );
            }
            return navE.render(i);
          })}
        </Nav>
      </div>
    );
  }
}

export default Navs;

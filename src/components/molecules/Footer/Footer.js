import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import './style.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.goTo = this.goTo.bind(this);
  }

  goTo(url) {
    return this.props.history.push({
      pathname: url,
      state: {},
    });
  }

  render() {
    return (
      <div className="MainContainerFooter">
        <hr className="cdp-rule" />
        <Link to="/devenir-enseignant">Devenir professeur</Link>
      </div>
    );
  }
}

export default Footer;

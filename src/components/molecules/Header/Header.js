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

import { renderModal } from './Modal';
import { createInitFormData } from '../../../redux/form/helpers';
import { dispatchSignInUser, dispatchLogOutUser } from '../../../redux/action/auth';
import { dispatchSignInTeacher, dispatchLogOutUserTeacher } from '../../../redux/action/user';

import logo from '../../../assets/texte.png';

import './style.scss';

const formName = 'header';
export const initFormData = createInitFormData(formName);

const formToAPi = data => {
  return {
    idAccount: data.idAccount,
    username: data.username,
    password: data.password,
  };
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: false,
      dropdownOpen: false,
      changeAccess: false, // default on student
    };
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onValidate = this.onValidate.bind(this);
    this.logout = this.logout.bind(this);
    this.toggleMenuUserAuth = this.toggleMenuUserAuth.bind(this);
    this.goTo = this.goTo.bind(this);
    this.updateAccessUser = this.updateAccessUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { modal } = this.state;
    if (nextProps.auth.status === 'authenticated' && nextProps.auth.user && !nextProps.auth.error) {
      if (modal) {
        this.setState({
          modal: false,
        });
        if (nextProps.auth.user.isStudent) {
          return this.props.history.push({
            pathname: '/etudiant/mon-programme-scolaire',
            state: {},
          });
        }
        if (nextProps.auth.user.isTeacher) {
          return this.props.history.push({
            pathname: '/compte-enseignant',
            state: {},
          });
        }
      }
    }
    //error
    //Throw error if it was not already thrown (check this.props.user.error to see if alert was already shown)
    //If u dont check this.props.user.error, u may throw error multiple times due to redux-form's validation errors
    if (
      nextProps.auth.status === 'signin' &&
      !nextProps.auth.user &&
      nextProps.auth.error &&
      !this.props.auth.error
    ) {
      alert(nextProps.auth.error.error);
    }
  }

  async onValidate(data) {
    if (this.state.changeAccess) {
      // teacher
      return this.props.dispatchSignInTeacherFunction(formToAPi(data));
    }
    return this.props.dispatchSignInUserFunction(formToAPi(data));
  }

  logout() {
    const { user } = this.props.auth;
    if (user.isStudent) {
      return this.props.dispatchLogOutUserFunction();
    }
    return this.props.dispatchLogOutUserTeacherFunction();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleMenuUserAuth() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  goTo(url) {
    return this.props.history.push({
      pathname: url,
      state: {},
    });
  }

  updateAccessUser() {
    this.setState({
      changeAccess: !this.state.changeAccess,
    });
  }

  render() {
    const { auth } = this.props;
    let componentDropdown = (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleMenuUserAuth}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => this.goTo('/etudiant/mon-programme-scolaire')}>
            Mes cours
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Mon Profil</DropdownItem>
          <DropdownItem>Mes facturations</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Centre d'aide</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={this.logout}>Déconnexion</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
    if (!!auth.user === true && auth.user.isTeacher) {
      componentDropdown = (
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleMenuUserAuth}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => this.goTo('/compte-enseignant')}>Mon compte</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Mon Profil</DropdownItem>
            <DropdownItem>Mes facturations</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Centre d'aide</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={this.logout}>Déconnexion</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }

    return (
      <div className="MainContainerNavBar">
        <Navbar style={{ backgroundColor: 'white' }} expand="md">
          <Link to="/">
            <img src={logo} width={100} />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {!auth.isAuthenticated ? (
                <span onClick={this.toggleModal}>Connexion</span>
              ) : (
                componentDropdown
              )}
            </Nav>
          </Collapse>
        </Navbar>
        {renderModal(
          this.state.modal,
          this.toggleModal,
          this.props.handleSubmit,
          this.onValidate,
          this.state.changeAccess,
          this.updateAccessUser
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  dispatchSignInUserFunction: user => dispatchSignInUser(user),
  dispatchSignInTeacherFunction: user => dispatchSignInTeacher(user),
  dispatchLogOutUserFunction: () => dispatchLogOutUser(),
  dispatchLogOutUserTeacherFunction: () => dispatchLogOutUserTeacher(),
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: formName,
  })(Header)
);

import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { renderModal } from './Modal';
import { createInitFormData } from '../../../redux/form/helpers';
import { dispatchSignInUser, dispatchLogOutUser } from '../../../redux/action/auth';

import logo from '../../../assets/texte.png';

import './style.scss';

const formName = 'header';
export const initFormData = createInitFormData(formName);

const formToAPi = data => {
  return {
    email: data.username,
    password: data.password,
  };
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onValidate = this.onValidate.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { modal } = this.state;
    if (nextProps.auth.status === 'authenticated' && nextProps.auth.user && !nextProps.auth.error) {
      if (modal) {
        this.setState({
          modal: false,
        });
        return this.props.history.push({
          pathname: '/doctor',
          state: {},
        });
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
    this.props.dispatchSignInUserFunction(formToAPi(data));
  }

  logout() {
    this.props.dispatchLogOutUserFunction();
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

  render() {
    const { auth } = this.props;
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
                <Button outline color="primary" onClick={this.logout}>
                  Déconnexion
                </Button>
              )}
            </Nav>
          </Collapse>
        </Navbar>
        {renderModal(this.state.modal, this.toggleModal, this.props.handleSubmit, this.onValidate)}
      </div>
    );
  }
}

const mapDispatchToProps = {
  dispatchSignInUserFunction: user => dispatchSignInUser(user),
  dispatchLogOutUserFunction: () => dispatchLogOutUser(),
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

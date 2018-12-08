import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/dashboard">
                <i className="fa fa-home" /> Developer Platform Dashboard{' '}
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Cours</span>
          </h6>

          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/dashboard/refarcs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-file"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                  <polyline points="13 2 13 9 20 9" />
                </svg>
                Mes cours
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/dashboard/refarcs/all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-shopping-cart"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Tout les cours
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/enseignant/ajouter-un-cours">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-plus-circle"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
                Creer un cours
              </NavLink>
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>API Services</span>
          </h6>

          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/dashboard/services/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-file"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                  <polyline points="13 2 13 9 20 9" />
                </svg>
                My API services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/dashboard/services/all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-shopping-cart"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                All API services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink exact className="nav-link" to="/dashboard/services/create">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-plus-circle"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
                Create an API service
              </NavLink>
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Products</span>
          </h6>

          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/dashboard/products/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-file"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                  <polyline points="13 2 13 9 20 9" />
                </svg>
                My products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/dashboard/products/all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-shopping-cart"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                All products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink exact className="nav-link" to="/dashboard/products/create">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-plus-circle"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
                Create a product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/dashboard/products/gatestatus">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-file"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                  <polyline points="13 2 13 9 20 9" />
                </svg>
                Products Gate status Admin
              </NavLink>
            </li>
          </ul>

          {/*<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">*/}
          {/*<span>Organizations</span>*/}
          {/*</h6>*/}
          {/*<ul className="nav flex-column">*/}
          {/*<li className="nav-item">*/}
          {/*<NavLink exact className="nav-link" to="/dashboard/organizations">*/}
          {/*<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
          {/*fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
          {/*strokeLinejoin="round" className="feather feather-users">*/}
          {/*<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>*/}
          {/*<circle cx="9" cy="7" r="4"/>*/}
          {/*<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>*/}
          {/*<path d="M16 3.13a4 4 0 0 1 0 7.75"/>*/}
          {/*</svg>*/}
          {/*My organizations*/}
          {/*</NavLink>*/}
          {/*</li>*/}
          {/*<li className="nav-item">*/}
          {/*<NavLink className="nav-link" to="/dashboard/organizations/all">*/}
          {/*<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
          {/*fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
          {/*strokeLinejoin="round" className="feather feather-bar-chart-2">*/}
          {/*<line x1="18" y1="20" x2="18" y2="10"/>*/}
          {/*<line x1="12" y1="20" x2="12" y2="4"/>*/}
          {/*<line x1="6" y1="20" x2="6" y2="14"/>*/}
          {/*</svg>*/}
          {/*All organizations*/}
          {/*</NavLink>*/}
          {/*</li>*/}
          {/*</ul>*/}
        </div>
      </nav>
    );
  }
}

import React from 'react';
import './Navigation.css'
import { NavLink } from "react-router-dom";
import logo from '../../logo.svg';

const Navigation = () => {
  return (
    <header>
      <div className="nav">
        <div className="nav-brand">
          <img src={logo} id="logo" alt="logo"/>
        </div>
        <div className="nav-menu">
          <ul className="nav-links-container">
            <li className="nav-links"><NavLink to="/"><span className="nav-link-type">Home</span></NavLink></li>
            <li className="nav-links"><NavLink to="/contact"><span className="nav-link-type">Contact</span></NavLink></li>
            <li className="nav-links" id="custom"><NavLink to="/customiser"><span id="cus-link" className="nav-link-type">Customise</span></NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

import React from "react";
import { NavLink, Link } from 'react-router-dom';
import { NavItem } from "../styles/Styles";
import "../styles/Desktop.css";
import  NavLogo  from '../../assets/logos/WhiteLogo.png';

const Nav = () => {
  return (
    <div className="nav-cont" style={{ boxShadow: "0 2px 5px -2px black" }}>
      <div className="nav-left">
        <NavLink to="/" className="logo-link">
          <img src={NavLogo} className="nav-logo" alt='sxexp logo' />
        </NavLink>
      </div>
      <div className="nav-right">
        <Link to="/book">
          <NavItem className="nav-item">The Book</NavItem>
        </Link>
        <Link to="/tour-dates">
          <NavItem className="nav-item">Tour Dates</NavItem>
        </Link>
        <Link to="/about-us">
          <NavItem className="nav-item">About</NavItem>
        </Link>
        <Link to="/humanitarian-work">
          <NavItem className="nav-item">Humanitarian Work</NavItem>
        </Link>
        <Link to="/contact-us">
          <NavItem className="nav-item">Contact Us</NavItem>
        </Link>
      </div>
    </div>
  );
};

export default Nav;

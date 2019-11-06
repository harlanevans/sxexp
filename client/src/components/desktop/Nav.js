import React from "react";
import { Link } from 'react-router-dom';
import { NavItem } from "../styles/Styles";
import "../styles/Desktop.css";
import  NavLogo  from '../../assets/logos/WhiteLogo.png';

const Nav = () => {
  return (
    <div className="nav-cont">
      <div className="nav-left">
      <Link to='/'>
        <img src={NavLogo} className="nav-logo" />
      </Link>
      </div>
      <div className="nav-right">
      <Link to='/book'>
        <NavItem className="nav-item">The Book</NavItem>
      </Link>
      <Link to='/tour-dates'>
        <NavItem className="nav-item">Tour Dates</NavItem>
      </Link>
      <Link to='/about-us'>
        <NavItem className="nav-item">About</NavItem>
      </Link>
      <Link to='/humanitarian-work'>
        <NavItem className="nav-item">Humanitarian Work</NavItem>
      </Link>
      <Link to='/contact-us'>
        <NavItem className="nav-item">Contact Us</NavItem>
      </Link>
      </div>
    </div>
  );
};

export default Nav;

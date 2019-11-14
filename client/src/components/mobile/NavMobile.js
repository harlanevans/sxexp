import React from "react";
import "../styles/Mobile.css";
import WhiteLogo from "../../assets/logos/WhiteLogo.png";
import MenuIcon from "../../assets/logos/WhiteMenuIcon.png";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const NavMobile = ({ toggleModal }) => {
  return (
    <div className="nav-mob-cont" style={{ boxShadow: "0 2px 10px -2px black" }}>
      <div className="nav-mob-left">
        <Link to="/">
          <img src={WhiteLogo} className="nav-mob-logo" />
        </Link>
      </div>
      <div className="nav-mob-right">
        <img
          src={MenuIcon}
          className="nav-mob-menu"
          onClick={toggleModal}
        />
      </div>
    </div>
  );
};

export default NavMobile;

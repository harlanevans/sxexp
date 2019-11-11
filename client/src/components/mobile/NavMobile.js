import React from "react";
import "../styles/Mobile.css";
import WhiteLogo from "../../assets/logos/WhiteLogo.png";
import MenuIcon from "../../assets/logos/WhiteMenuIcon.png";
import Modal from "./Modal";

const NavMobile = props => {
  return (
    <div className="nav-mob-cont">
      <div className="nav-mob-left">
        <img src={WhiteLogo} className="nav-mob-logo" />
      </div>
      <div className="nav-mob-right">
        <img
          src={MenuIcon}
          className="nav-mob-menu"
          onClick={props.toggleModal}
        />
      </div>
    </div>
  );
};

export default NavMobile;

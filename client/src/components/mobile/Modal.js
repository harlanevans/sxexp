import React from "react";
import { ModalButton } from "../styles/MobStyles";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Exit from '../../assets/logos/Exit.svg';
import { Fade } from 'react-reveal';


const Modal = ({ showModal, toggleModal }) => {
  return showModal === true ? (
    <Fade duration={1000}>

    <div className="modal-main">
      <div className='modal-column'>
      <div className='modal-icon-cont'>
        <div className='modal-icon'>
          <img src={Exit} onClick={toggleModal} />
        </div>
      </div>
      <div className='modal-button-cont'>
        <HashLink to='/#home'>
          <ModalButton onClick={toggleModal}>Home</ModalButton>
        </HashLink>
      </div>
      <div className='modal-button-cont'>
        <Link to='/book'>
          <ModalButton onClick={toggleModal}>Book</ModalButton>
        </Link>
      </div>
      <div className='modal-button-cont'>
          <Link to='/tour-dates'>
          <ModalButton onClick={toggleModal}>Tour Dates</ModalButton>
        </Link>
      </div>
      <div className='modal-button-cont'>
          <Link to='/about-us'>
          <ModalButton onClick={toggleModal}>About</ModalButton>
        </Link>
      </div>
      <div className='modal-button-cont'>
          <Link to='/humanitarian-work'>
          <ModalButton onClick={toggleModal}>Humanitarian</ModalButton>
        </Link>
      </div>
      <div className='modal-button-cont'>
          <Link to='/contact-us'>
          <ModalButton onClick={toggleModal}>Contact Us</ModalButton>
        </Link>
      </div>
      </div>
    </div>
    </Fade>
  ) : (
    <></>
  );
};

export default Modal;

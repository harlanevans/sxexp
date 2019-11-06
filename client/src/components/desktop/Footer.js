import React from "react";
import { FooterText, FooterTitle, FooterOpacity } from "../styles/Styles";

const Footer = () => {
  return (
    <footer>
        <div className="footer-row">
          <FooterTitle>CONTACT INFORMATION</FooterTitle>
        </div>
        <div className='footer-col'>
        <div className='footer-row'>
          <FooterText>Southern Cross Expeditions</FooterText>
        </div>
        <div className='footer-row'>
          <FooterText>4110 So. Highland Drive, Ste #333</FooterText>
        </div>

        <div className='footer-row'>
          <FooterText>Salt Lake City, UT 84124</FooterText>
        </div>

        <div className='footer-row'>
          <FooterText>801-859-1033</FooterText>
        </div>

        <div className='footer-row'>
          <FooterText>
            <a type="email" href="mailto: van@southerncrossexp.com" >
              van@southerncrossexp.com
            </a>
          </FooterText>
        </div>
        <div className='footer-row'>
          <FooterOpacity>© Southern Cross Expeditions.</FooterOpacity>
        </div>
        </div>
    </footer>
  );
};

export default Footer;

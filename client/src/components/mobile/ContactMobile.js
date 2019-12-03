import React from "react";
import { Title, TitleCont, Button, ButtonCont, ContactText } from "../styles/MobStyles";
import { Fade } from "react-reveal";
import Footer from "./FooterMob";

import Logo from "../../assets/logos/ColorLogo.png";

class ContactMobile extends React.Component {
  state = { name: "", email: "", phone: "", questions: "" };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { name, email, phone, questions } = this.state;
    return (
      <div>
        <div className="new-comp-pad" style={{ paddingTop: "35%", paddingBottom: "15%" }}>
          <Fade>
            <TitleCont>
              <Title>Contact Us</Title>
            </TitleCont>
          </Fade>
        <form className='form-mob'>
          <label>Name</label>
          <div className="input-pad">
            <input
              name="name"
              value={name}
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <label>Email</label>
          <div className="input-pad">
            <input
              name="email"
              value={email}
              type="email"
              onChange={this.handleChange}
            />
          </div>
          <label>Phone</label>
          <div className="input-pad">
            <input
              name="phone"
              value={phone}
              type="phone"
              onChange={this.handleChange}
              />
          </div>
          <label>Questions</label>
          <div className="input-pad">
            <textarea 
              name="questions"
              value={questions}
              type="text"
              onChange={this.handleChange}
              wrap='hard'

            
            />
          </div>
          <ButtonCont>
            <Button className="but-cont">Submit</Button>
          </ButtonCont>
        </form>
          <div className="contact-row" style={{ padding: '2em 0em' }}>
            <img src={Logo} className="contact-logo" alt='logo' />
          </div>
          <div className="contact-row">
            <ContactText>4110 So. Highland Drive, Ste #333</ContactText>
          </div>
          <div className="contact-row">
            <ContactText>Salt Lake City, UT 84124</ContactText>
          </div>
          <div className="contact-row">
            <ContactText>801-859-1033</ContactText>
          </div>
          <div className="contact-row">
            <ContactText>
              <a href="mailto:van@genhu.org" className="email">
                van@southerncrossexp.com
                    </a>
            </ContactText>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactMobile;

import React from "react";
import {
  Title,
  TitleCont,
  ButtonCont,
  Button,
  ContactText
} from "../styles/Styles";
import Footer from "./Footer";
import { Fade } from "react-reveal";
import Logo from "../../assets/logos/ColorLogo.png";

class Contact extends React.Component {
  state = { name: "", email: "", phone: "", questions: "" };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { name, email, phone, questions } = this.state;
    return (
      <div>
        <div className="comp-cont-small">
          <Fade duration={2000} top>
            <TitleCont>
              <Title>Contact Us Today</Title>
            </TitleCont>
          </Fade>

          <div className="contact-row">
            <Fade duration={2000} delay={500}>
              <div className="c-col-one">
                <div className="inside-row">
                  <ContactText>Southern Cross Expeditions</ContactText>
                </div>
                <div className="inside-row">
                  <ContactText>4110 So. Highland Drive, Ste #333</ContactText>
                </div>
                <div className="inside-row">
                  <ContactText>Salt Lake City, UT 84124</ContactText>
                </div>
                <div className="inside-row">
                  <ContactText>801-859-1033</ContactText>
                </div>
                <div className="inside-row">
                  <ContactText>
                    <a href="mailto:van@southerncrossexp.com" className="email">
                      van@southerncrossexp.com
                    </a>
                  </ContactText>
                </div>
                <div className="inside-row">
                  <img src={Logo} className="contact-logo" alt='logo'/>
                </div>
              </div>
            </Fade>
            <Fade duration={2000} delay={500}>
              <div className="c-col-two">
                <div className="inside-row-two">
                  <form>
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
                      <textarea />
                    </div>
                    <div>
                      <Button className="but-cont">Submit</Button>
                    </div>
                  </form>
                </div> 
              </div>
            </Fade>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;

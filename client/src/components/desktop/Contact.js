import React from "react";
import {
  Title,
  TitleCont,
  ButtonCont,
  Button,
  ContactText
} from "../styles/Styles";
import Footer from "./Footer";
import SubmitModal from './SubmitModal';
import { Fade } from "react-reveal";
import Logo from "../../assets/logos/ColorLogo.png";
import axios from "axios";

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    questions: "",
    formSubmitted: false
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  toggleModal = () => {
    this.setState({ formSubmitted: !this.state.formSubmitted });
  }

  resetValues = () => {
    this.setState({name: '', email: '', phone: '', questions: ''})
  }

  handleSubmit = e => {
    e.preventDefault();
    const contact = { ...this.state };
    delete contact.formSubmitted;
    axios
      .post("/api/contact", { contact })
      .then(res => {
        this.toggleModal();
      })
      .then(res => {
        this.resetValues();
      })
      .catch(res => {
          console.log(res);
          alert("Unable to process request")
        });
  };
  render() {
    const { name, email, phone, questions, formSubmitted } = this.state;
    return (
      
      <div>
       
        <div className="comp-cont-pages">
          <Fade duration={2000} top>
            <TitleCont style={{ padding: "2em 0em 2em" }}> 
              <Title>Contact Us Today</Title>
            </TitleCont>
          </Fade>

          <div className="contact-row">
            <Fade duration={2000} delay={500}>
              <div className="c-col-one-cont">
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
                      <a href="mailto:van@genhu.com" style={{ color: "#007bff"}}>
                      Email Us!
                    </a>
                  </ContactText>
                </div>
                </div>
                {/* Logo */}
                {/* <div className="inside-row">
                  <img src={Logo} className="contact-logo" alt="logo" />
                </div> */}
              </div>
            </Fade>
            <Fade duration={2000} delay={500}>
              <div className="c-col-two">
                <div className="inside-row-two">
                  <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <div className="input-pad">
                      <input
                        name="name"
                        value={name}
                        type="text"
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <label>Email</label>
                    <div className="input-pad">
                      <input
                        name="email"
                        value={email}
                        type="email"
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <label>Phone</label>
                    <div className="input-pad">
                      <input
                        name="phone"
                        value={phone}
                        type="phone"
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <label>Questions</label>
                    <div className="input-pad">
                      <textarea
                        name="questions"
                        value={questions}
                        type="text"
                        onChange={this.handleChange}
                        wrap="hard"
                      />
                    </div>
                    <div>
                      <Button className="but-cont">Submit</Button>
                    </div>
                  </form>
                </div>
              </div>
            </Fade>
          </div>
          <SubmitModal formSubmitted={this.state.formSubmitted} toggleModal={this.toggleModal}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;

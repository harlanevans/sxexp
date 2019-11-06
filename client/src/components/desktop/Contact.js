import React from "react";
import { Title, TitleCont } from "../styles/Styles";
import { Fade } from "react-reveal";

class Contact extends React.Component {

  state = { name: '', email: '', phone: '', questions: ''}

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
  render() {
    const { name, email, phone, questions} = this.state;
    return (
      <div className="comp-cont">
        <Fade duration={2000} top>
          <TitleCont>
            <Title>Contact Us Today</Title>
          </TitleCont>
        </Fade>

        <div className="contact-row">
          <div className="c-col-one">
            <div className="inside-row">stuff</div>
          </div>
          <div className="c-col-two">
            <div className="inside-row-two">
              <form>
                <label name='name' value={name}>Name</label>
                <input />
                <label>Email</label>
                <input />
                <label>Phone</label>
                <input />
                <label>Questions</label>
                <textarea />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

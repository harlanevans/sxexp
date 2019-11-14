import React from "react";
import { Title, Text, TitleCont, TextCont } from "../styles/MobStyles";
import { Fade } from "react-reveal";
import Footer from "./FooterMob";

import Image from "../../assets/images/Hat.jpg";

const CalendarMobile = () => {
  return (
    <div>
    <div className="new-comp-pad">
        <Fade>
          <TitleCont>
            <Title>Tour Dates</Title>
          </TitleCont>
        </Fade>
        <div className="page-img-cont">
          <img src={Image} className="page-img" />
        </div>
        <Fade>
          <TextCont style={{paddingTop: '2em'}}>
            <Text>Tour dates coming soon!</Text>
          </TextCont>
        </Fade>
      </div>
      <Footer />
    </div>
  );
};

export default CalendarMobile;

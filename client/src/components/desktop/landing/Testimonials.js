import React from "react";
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom'

import {
  TanBackground,
  TextWhite,
  TextCont,
  TitleWhite,
  TitleCont,
  ButtonWhite,
  ButtonCont,
  QuoteAuth
} from "../../styles/Styles";

const Testimonials = () => {
  return (
    <TanBackground>
      <div className="comp-cont-small">
        <Fade duration={2000} top>
          <TitleCont>
            <TitleWhite>Testimonials</TitleWhite>
          </TitleCont>
        </Fade>
        <Fade>
          <TextCont>
            <TextWhite>
              '{" "}…Once again we want to express our appreciation for the most
              sensitive, well informed, organized and best guide we have ever
              had—and we’ve had a few.{" "}'
            </TextWhite>
          </TextCont>
        </Fade>
        <Fade>
            <QuoteAuth style={{fontSize: '2em'}}>—Ardeth Kapp, Located in Perú</QuoteAuth>
        </Fade>
      </div>
    </TanBackground>
  );
};

export default Testimonials;

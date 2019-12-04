import React from "react";
import { Fade } from 'react-reveal';

import {
  TanBackground,
  TextWhite,
  TextCont,
  TitleWhite,
  TitleCont,
  QuoteAuth
} from "../../styles/Styles";

const Testimonials = () => {
  return (
    <TanBackground>
      <div className="comp-cont-small">
        <Fade duration={2000}>
          <TitleCont>
            <TitleWhite>Testimonials</TitleWhite>
          </TitleCont>
        </Fade>
        <Fade duration={2000}>
          <TextCont>
            <TextWhite>
              '{" "}…Once again we want to express our appreciation for the most
              sensitive, well informed, organized and best guide we have ever
              had—and we’ve had a few.{" "}'
            </TextWhite>
          </TextCont>
        </Fade>
      <Fade duration={2000}>
            <QuoteAuth style={{fontSize: '2em'}}>—Ardeth Kapp</QuoteAuth>
        </Fade>
      </div>
    </TanBackground>
  );
};

export default Testimonials;

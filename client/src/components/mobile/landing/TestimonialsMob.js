import React from 'react';
import { TanBackground, TextWhite, TitleWhite, TitleCont, TextCont, QuoteAuth } from '../../styles/MobStyles';

const TestimonialsMob = () => {
  return (
    <TanBackground>
      <TitleCont>
        <TitleWhite>Testimonials</TitleWhite>
      </TitleCont>
      <TextCont>
        <TextWhite>
          <span>&#34;</span>{" "}…Once again we want to express our appreciation for
          the most sensitive, well informed, organized and best guide we have
          ever had—and we’ve had a few.{" "}<span>&#34;</span>
        </TextWhite>
      </TextCont>
      <QuoteAuth>—Ardeth Kapp, Located in Perú</QuoteAuth>
    </TanBackground>
  );
}

export default TestimonialsMob;
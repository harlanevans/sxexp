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
          ' …Once again we want to express our appreciation for the most
          sensitive, well informed, organized and best guide we have ever
          had—and we’ve had a few. '
        </TextWhite>
      </TextCont>
      <QuoteAuth>—Ardeth Kapp, Located in Perú</QuoteAuth>
    </TanBackground>
  );
}

export default TestimonialsMob;
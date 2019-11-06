import React from "react";
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal';
import { Title, TitleCont, TextCont, Text, Button, ButtonCont } from "../styles/Styles";

const BookLanding = () => {
  return (
    <div className="comp-cont-small">
    <Fade duration={2000}>

      <TitleCont>
        <Title>'The House of the Lord'</Title>
      </TitleCont>
    </Fade>
    <Fade duration={2000}>
      <TextCont>
        <Text>
          Author & PHD Van Evans, will complete his work this summer. If you
          would like to preorder his book, press the button below. There will be
          no cost to you now. Payment will be requested on release.
        </Text>
      </TextCont>
    </Fade>
    <Fade duration={2000}>
      <ButtonCont>
        <Link to='/book'>
      <Button className='button'>Order Book</Button>
        </Link>
      </ButtonCont>
    </Fade>
    </div>
  );
};

export default BookLanding;

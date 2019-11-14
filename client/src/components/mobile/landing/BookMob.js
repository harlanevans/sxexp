import React from 'react'
import {
  Title,
  TitleCont,
  Text,
  TextCont,
  ButtonCont,
  Button
} from "../../styles/MobStyles";
import { Fade } from "react-reveal";
import { Link } from 'react-router-dom';

const BookMob = () => {
  return (
    <div className='comp-padding'>

      <TitleCont>
        <Title>The House of the Lord</Title>
      </TitleCont>
      <TextCont>
        <Text>
          Author & PHD Van Evans, will complete his work this summer. If you
          would like to preorder his book, press the button below. There will be
          no cost to you now. Payment will be requested on release.
        </Text>
      </TextCont>
      <ButtonCont>
        <Link to='/book'>
        <Button>Order Book</Button>
        </Link>
      </ButtonCont>
    </div>
  );
}

export default BookMob;
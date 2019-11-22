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
import BookCover from '../../../assets/images/Bookcover.jpg';

const BookMob = () => {
  return (
    <div className="comp-padding">
    <Fade duration={2000}>
      <TitleCont>
        <Title>"The House of the Lord"</Title>
      </TitleCont>
    </Fade>
    <Fade duration={2000}>
        <div className="page-img-cont">
          <img src={BookCover} className="page-img" alt="book cover"/>
        </div>
    </Fade>
    <Fade duration={2000}>
      <TextCont style={{padding: "2em 2em"}}>
        <Text>
          Released on November 20, 2019, this is the only book of its kind and
          is the culmination of 20 years of work and research in Perú. Jesus
          Christ visited the people of South America at least once at some point
          in time after His resurrection and prior to the arrival of the
          Spaniards. He healed them and taught them, and they built temples to
          worship Him.
        </Text>
      </TextCont>
    </Fade>
    <Fade duration={2000}>
      <ButtonCont>
        <Link to="/book">
          <Button>Order Book</Button>
        </Link>
      </ButtonCont>
    </Fade>
    </div>
  );
}

export default BookMob;
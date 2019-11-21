import React from "react";
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal';
import { Title, TitleCont, TextCont, Text, Button, ButtonCont } from "../../styles/Styles";
import BookCover from '../../../assets/images/Bookcover.jpg';

const BookLanding = () => {
  return (
    <div className="comp-cont-small">
      <Fade duration={2000}>
        <TitleCont>
          <Title>"The House of the Lord"</Title>
        </TitleCont>
      </Fade>
      <Fade duration={2000}>
      <div className='book-row'>
      <div className='flex-col'></div>
      <div className='book-col-one'>
        <div className='book-img-cont'>
          <img src={BookCover} alt='house of the lord' className='book-cover-img' style={style.imgSize}/>
        </div>
      </div>
      <div className='book-col-two'>
      <div className='book-text-cont'>
          <Text>
            Released on November 20, 2019, this is the only book of its kind and
            is the culmination of 20 years of work and research in Perú. Jesus
            Christ visited the people of South America at least once at some
            point in time after His resurrection and prior to the arrival of the
            Spaniards. He healed them and taught them, and they built temples to
            worship Him.
          </Text>
        </div>
      </div>
      <div className='flex-col'></div>
      </div>
      </Fade>
      <Fade duration={2000}>
        <ButtonCont>
          <Link to="/book">
            <Button className="button">Order Book</Button>
          </Link>
        </ButtonCont>
      </Fade>
    </div>
  );
};

export default BookLanding;

const style = {
  imgSize: {
    height: "60vh",
    width: "75%"
  }
}

import React from "react";
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal';
import { Title, TitleCont, TextCont, Text, Button, ButtonCont } from "../../styles/Styles";
import BookCover from '../../../assets/book_images/Bookcover.jpg';

const BookLanding = () => {
  return (
    <div className="comp-cont-small">
      <Fade duration={2000}>
        <TitleCont>
          <Title>"The House of the Lord"</Title>
        </TitleCont>
      </Fade>
      <Fade duration={2000}>
        <div className="book-row">
          <div className="flex-col"></div>
          <div className="book-col-one">
            <div className="book-img-cont">
              <img
                src={BookCover}
                alt="house of the lord"
                className="book-cover-img"
                style={style.imgSize}
              />
            </div>
          </div>
          <div className="book-col-two">
            <div className="book-text-cont">
              <Text>
                Released in November, 2019, this is the only book of its kind
                and is the culmination of 22 years of work and research in Perú.
                Jesus Christ visited the people of South America at least once
                at some point in time after His resurrection and prior to the
                arrival of the Spaniards. He healed them and taught them, and
                they built temples to worship Him.
              </Text>
            </div>
          </div>
          <div className="flex-col"></div>
        </div>
      </Fade>
      <Fade duration={2000}>
        <ButtonCont>
          <a href="https://www.amazon.com/gp/product/1734276800/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1"
          target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="button" style={{ margin: "0em 1em" }}>
              Order Book
            </Button>
          </a>
          <Link to="/book">
            <Button className="button" style={{ margin: "0em 1em" }}>
              More Information
            </Button>
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

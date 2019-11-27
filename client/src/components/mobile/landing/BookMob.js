import React from 'react'
import {
  Title,
  TitleCont,
  Text,
  TextCont,
  ButtonContCol,
  ButtonCont,
  Button
} from "../../styles/MobStyles";
import { Fade } from "react-reveal";
import { Link } from 'react-router-dom';
import BookCover from '../../../assets/book_images/Bookcover.jpg';

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
      <ButtonContCol>
        <ButtonCont>

            <a href="https://www.amazon.com/gp/product/1734276800/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1"
              target="_blank"
              rel="noopener noreferrer"
              >
              <Button className="button" style={{ margin: "0em 1em" }}>
                Order Book
            </Button>
            </a>
              </ButtonCont>
              <ButtonCont>
            <Link to="/book">
              <Button className="button" style={{ margin: "0em 1em" }}>
                More Information
            </Button>
            </Link>
              </ButtonCont>
      </ButtonContCol>
    </Fade>
    </div>
  );
}

export default BookMob;
import React from "react";

import Footer from "./Footer";
import { Fade } from "react-reveal";
import PathWay from "../../assets/images/Pathway.jpg";

import {
  Title,
  TitleCont,
  TextCont,
  Text,
  ButtonCont,
  Button
} from "../styles/Styles";

const Book = () => {
  return (
    <div>
      <div className="comp-cont-small">
        <Fade duration={2000} top>
          <TitleCont>
            <Title>The House of the Lord</Title>
          </TitleCont>
        </Fade>
        <Fade duration={2000} delay={750}>
        <div className="row img-cont">
          <img src={PathWay} className="human-img" />
        </div>
        </Fade>
        <Fade duration={2000} delay={500}>
        <TextCont>
          <Text>
            Years in the making, Van Evans has written the amazing story of
            Christ coming to the Americas. To order this amazing and spiritual
            story of our Lord and Savior, one of the most amazing men to walk
            this earth, click the button below. 10% of all proceeds will go to
            Generations Humanitarian - a non profit that Van is a part of.
          </Text>
        </TextCont>
        </Fade>
        <Fade duration={2000} delay={500}>
        <ButtonCont>
          <a href='https://www.amazon.com/' target="_blank" className='book-order-tag'>
          <Button className='button' >Order</Button>
          </a>
        </ButtonCont>
        </Fade>
      </div>
      <Footer />
    </div>
  );
};

export default Book;

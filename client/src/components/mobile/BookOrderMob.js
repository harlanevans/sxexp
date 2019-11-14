import React from "react";
import {
  Title,
  TitleCont,
  Text,
  TextCont,
  ButtonCont,
  Button
} from "../styles/MobStyles";
import Pathway from "../../assets/images/Pathway.jpg";
import Footer from './FooterMob';
import { Fade } from "react-reveal";

const BookOrderMob = () => {
  return (
    <div>
      
    <div className="page-cont" style={{ paddingTop: "25%", paddingBottom: '15%' }}>
      <TitleCont>
        <Title>The House of the Lord</Title>
      </TitleCont>
      <div className="page-img-cont">
        <img src={Pathway} className="page-img" />
      </div>
      <TextCont style={{ padding: "1em 2em" }}>
        <Text>
          Years in the making, Van Evans has written the amazing story of Christ
          coming to the Americas. To order this amazing and spiritual story of
          our Lord and Savior, one of the most amazing men to walk this earth,
          click the button below. 10% of all proceeds will go to Generations
          Humanitarian - a non profit that Van is a part of.
        </Text>
      </TextCont>

      <ButtonCont>
        <a
          href="https://www.amazon.com/"
          target="_blank"
          // className="book-order-tag"
          rel="noopener noreferrer"
          >
          <Button>Order</Button>
        </a>
      </ButtonCont>
    </div>
      <Footer />
          </div>
  );
};

export default BookOrderMob;

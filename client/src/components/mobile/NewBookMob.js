import React from "react";
import {
  Title,
  TitleCont,
  Text,
  TextCont,
  ButtonCont,
  Button
} from "../styles/MobStyles";
import Bookcover from '../../assets/book_images/Bookcover.jpg';
import Footer from "./FooterMob";
import { Link } from 'react-router-dom';
import { Fade } from "react-reveal";

const NewBookMob = () => {
  return (
    <div>
      <div
        className="new-comp-pad"
        style={{ paddingTop: "35%", paddingBottom: "15%" }}
      >
        <TitleCont>
          <Title>The House of the Lord</Title>
        </TitleCont>
        <TextCont style={{ paddingTop: "2em" }}>
          <Text>
            Around 1598, an indigenous priest born in Cusco named Francisco de
            Ávila wrote what is known today as "The Huarochirí Manuscript." In
            it he writes:
          </Text>
        </TextCont>
        <div style={{ padding: "0em 2em" }}>
          <div style={style.stanza}>“In ancient times the sun died.</div>
          <div style={style.stanza}>
            {" "}
            Because of his death it was night for five days.
          </div>
          <div style={style.stanza}>Rocks banged against each other.</div>
          <div style={style.stanza}>
            Mortars and grinding stones began to eat people.
          </div>
          <div style={style.stanza}>Buck llamas started to drive men.</div>
          <div style={style.stanza}>
            Here’s what we Christians think about it:
          </div>
          <div style={style.stanza}>
            We think these stories tell of the darkness following the death
          </div>
          <div style={style.stanza}>of our Lord Jesus Christ.</div>
          <div style={style.stanza}>Maybe that’s what it was” (ch. 4).</div>
        </div>
        <div>
          <Fade duration={2000}>
            <div className="page-img-cont" style={{ padding: "2em" }}>
              <img src={Bookcover} className="page-img" alt="bookcover" />
            </div>
          </Fade>
          <TextCont>
            <Text>
              This is the culmination of 22 years of work and research in Perú.
              This book proposes that Jesus Christ visited the people of South
              America at least once at some point in time after His resurrection
              and prior to the arrival of the Spaniards. He healed them and
              taught them, and they built temples to worship Him.
            </Text>
          </TextCont>
          <Fade duration={2000} delay={500}>
            <ButtonCont>
              <a
                href="https://www.amazon.com/gp/product/1734276800/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1"
                target="_blank"
                className="book-order-tag"
                rel="noopener noreferrer"
              >
                <Button className="button">Order Book</Button>
              </a>
            </ButtonCont>
          <div style={{ padding: "1em" }}>
            <div style={style.line}></div>
          </div>
          <ButtonCont>
            <Link to="/gallery">
              <Button>View Gallery</Button>
            </Link>
          </ButtonCont>
          </Fade>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewBookMob;

const style = {
  stanza: {
    textAlign: "left",
    fontStyle: "italic",
    fontWeight: "300",
    fontSize: "1.25em"
  },
  line: {
    borderBottom: "solid 1px grey",
  }
};

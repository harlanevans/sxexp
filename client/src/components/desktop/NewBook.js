import React from "react";
import {
  Title,
  TitleCont,
  TextCont,
  Text,
  // PictureText,
  ButtonCont,
  Button
} from "../styles/Styles";

import BookCover from "../../assets/book_images/Bookcover.jpg";

import Footer from "./Footer";
import Gallery from './Gallery';
import { Fade } from "react-reveal";

const NewBook = () => {
  return (
    <div>
      <div className="comp-cont-pages">
        <Fade duration={2000} top>
          <TitleCont style={{ padding: "2em 0em 2em" }}> 
            <Title>The House of the Lord</Title>
          </TitleCont>
        </Fade>
        <Fade duration={2000} delay={500}>
          <TextCont>
            <Text>
                Around 1598, an indigenous priest born in Cusco named Francisco de
                Ávila wrote what is known today as "The Huarochirí Manuscript." In
                it he writes:
            </Text>
          </TextCont>
        </Fade>
        <Fade duration={2000} delay={500}>
        <Text>
          <div style={style.parentRow}>
            <div style={style.columnHalf}>
              <div style={style.imgCont}>
                <img src={BookCover} style={style.img} alt="" />
              </div>
            </div>

            <div style={style.columnHalf}>
              <div>
                <div style={style.stanza}>“In ancient times the sun died.</div>
                <div style={style.stanza}>
                  {" "}
                  Because of his death it was night for five days.
                </div>
                <div style={style.stanza}>Rocks banged against each other.</div>
                <div style={style.stanza}>
                  Mortars and grinding stones began to eat people.
                </div>
                <div style={style.stanza}>
                  Buck llamas started to drive men.
                </div>
                <div style={style.stanza}>
                  Here’s what we Christians think about it:
                </div>
                <div style={style.stanza}>
                  We think these stories tell of the darkness following the
                  death
                </div>
                <div style={style.stanza}>of our Lord Jesus Christ.</div>
                <div style={style.stanza}>
                  Maybe that’s what it was” (ch. 4).
                </div>
              </div>
            </div>
          </div>
        </Text>
        </Fade>
        <Fade duration={2000} delay={500}>
          <TextCont>
            <Text>
              This is the culmination of 22 years of work and research in Perú.
              This book proposes that Jesus Christ visited the people of South
              America at least once at some point in time after His resurrection
              and prior to the arrival of the Spaniards. He healed them and
              taught them, and they built temples to worship Him.
            </Text>
          </TextCont>
        </Fade>
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
        </Fade>
        <div style={{ padding: "2em" }}>
          <div style={style.line}></div>
        </div>
        <Fade duration={2000}>
          <Text>
            The following images are the color versions in the B&W book. The
            Figure numbers below match the figure in the book:
          </Text>
        </Fade>
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default NewBook;

const style = {
  parentRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: "75vh"
  },
  columnHalf: {
    display: "flex",
    flexDirection: "column",
    flex: "50%",
    padding: "2em"
  },
  stanza: {
    textAlign: "left",
    fontStyle: "italic",
    fontWeight: "100"
  },
  imgCont: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    height: "100%"
  },
  img: {
    width: "60%"
  },
  line: {
    borderBottom: "solid .5px grey",
  }
};

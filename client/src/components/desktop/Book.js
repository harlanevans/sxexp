import React from "react";

import Footer from "./Footer";
import { Fade } from "react-reveal";
import Raqchi from "../../assets/images/Raqchi.jpg";
import Condor from "../../assets/images/condorman.png";
import Bookcover from "../../assets/images/Bookcover.jpg";
import Kuti from "../../assets/images/SignofKuti.jpg";
import Apron from "../../assets/images/Forrdham.jpg";

import {
  Title,
  TitleCont,
  TextCont,
  Text,
  PictureText,
  ButtonCont,
  Button
} from "../styles/Styles";

const Book = () => {
  return (
    <div>
      <div className="comp-cont-pages" >
        <Fade duration={2000} top>
          <TitleCont style={{ padding: "2em 0em 2em" }}>
            <Title>The House of the Lord</Title>
          </TitleCont>
        </Fade>
        {/* <Fade duration={2000} delay={750}>
          <div className="row img-cont">
            <img
              src={PathWay}
              className="human-img"
              alt="house of the lord pathway"
            />
          </div>
        </Fade> */}
        <Fade duration={2000} delay={500}>
          <TextCont>
            <Text>
              Around 1598, an indigenous priest born in Cusco named Francisco de
              Ávila wrote what is known today as "The Huarochirí Manuscript."
            </Text>
          </TextCont>
        </Fade>
        <Fade duration={2000} delay={500}>
          <TextCont>
            <Text>
              In it he writes, “In ancient times the sun died. Because of his
              death it was night for five days. Rocks banged against each other.
              Mortars and grinding stones began to eat people. Buck llamas
              started to drive men. Here’s what we Christians think about it: We
              think these stories tell of the darkness following the death of
              our Lord Jesus Christ. Maybe that’s what it was” (ch. 4).
            </Text>
          </TextCont>
        </Fade>
        <Fade duration={2000} delay={500}>
          <div style={style.padding}>
            <div className="row img-cont">
              <img
                src={Condor}
                className="human-img"
                alt="house of the lord pathway"
              />
            </div>
            <TextCont>
              <PictureText>
                The Angel Moroni carrying the gold plates
              </PictureText>
            </TextCont>
          </div>
        </Fade>
        <Fade duration={2000} delay={500}>
          <TextCont>
            <Text>
              This text was translated from Quechua to English for the first
              time in 1991. Other recently discovered Spanish manuscripts from
              the early 17th century, such as the "secret Jesuit documents," and
              new translations of ignored 400 year-old manuscripts reveal that
              the Incas were Christians and they worshipped the god of the Old
              Testament. They tell the history of a people during Noah's
              dispensation that God led out of the middle east and brought
              across the sea to Peru, the land of promise.
            </Text>
          </TextCont>
        </Fade>
        <Fade duration={2000} delay={500}>
          <div style={style.padding}>
            <div className="row img-cont">
              <img
                src={Raqchi}
                className="human-img"
                alt="house of the lord pathway"
              />
            </div>
            <TextCont>
              <PictureText>
                The ruins of the Temple of Wiraqocha at Raqch’i. The red circles
                show where lumbers were inserted and veils hung from them.{" "}
              </PictureText>
            </TextCont>
          </div>
        </Fade>
        <Fade duration={2000} delay={500}>
          <TextCont>
            <Text>
              More importantly, this book reviews the Incas and ancient Andean's
              beliefs in a bearded white god who visited them by coming down
              from the sky in the form of a "brightly shining man." He tenderly
              healed the sick, walked a "Holy Path" throughout the Andes, and
              taught them how to live a law of consecration. This book discusses
              the temples built to him, the sacred vestments used in the temples
              and were buried in, and the signs and tokens associated to ancient
              temples.
            </Text>
          </TextCont>
        </Fade>

        <Fade duration={2000} delay={500}>
          <div style={style.padding}>
            <div style={style.imgRow}>
              <div style={style.flex}>
                <div className="row img-cont">
                  <img
                    src={Kuti}
                    className="human-img"
                    alt="house of the lord pathway"
                  />
                </div>
                <TextCont>
                  <PictureText>The sign of Kuti. </PictureText>
                </TextCont>
              </div>
              <div style={style.flex}>
                <div className="row img-cont">
                  <img
                    src={Apron}
                    className="human-img"
                    alt="house of the lord pathway"
                  />
                </div>
                <TextCont>
                  <PictureText>
                    Apron found on a mummy as part of the burial dress.{" "}
                  </PictureText>
                </TextCont>
              </div>
            </div>
          </div>
        </Fade>

        <Fade duration={2000} delay={500}>
          <TextCont>
            <Text>
              Members of the Church of Jesus Christ of Latter-day Saints will
              find the evidence compelling and familiar to their beliefs.
            </Text>
          </TextCont>
        </Fade>

        <Fade duration={2000} delay={500}>
          <div style={style.padding}>
            <div className="row img-cont" style={style.imgCont}>
              <img
                src={Bookcover}
                className="human-img"
                alt="house of the lord pathway"
                style={{ width: "25vw" }}
              />
            </div>
          </div>
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
      </div>
      <Footer />
    </div>
  );
};

export default Book;

// Confirm message if needed to be sent to amazon
// const confirm = () => {
//   if (window.confirm("We will send you to Amazon.com. Is that ok?")) {
//     window.open("exit.html", "Thanks for Visiting!");
//   }
// }

const style = {
  padding: {
    padding: "2em 0em"
  },
  imgCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    height: "70vh"
  },
  flex: {
    flex: "50%",
    height: "70vh"
  },

  imgRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: "4em 0em"
  }
};

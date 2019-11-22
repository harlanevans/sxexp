import React from "react";
import {
  Title,
  TitleCont,
  Text,
  TextCont,
  ButtonCont,
  Button
} from "../styles/MobStyles";

import Raqchi from "../../assets/images/Raqchi.jpg";
import Condor from "../../assets/images/condorman.png";
import Bookcover from "../../assets/images/Bookcover.jpg";
import Kuti from "../../assets/images/SignofKuti.jpg";
import Apron from "../../assets/images/Forrdham.jpg";
import Footer from "./FooterMob";
import { Fade } from "react-reveal";
import { PictureText } from "../styles/MobStyles";

const BookOrderMob = () => {
  return (
    <div>
      <div
        className="page-cont"
        style={{ paddingTop: "35%", paddingBottom: "15%" }}
      >
      <Fade duration={2000}>
        <TitleCont>
          <Title>The House of the Lord</Title>
        </TitleCont>
      </Fade>
        {/* <div className="page-img-cont">
        <img src={Pathway} className="page-img" />
      </div> */}
      <Fade duration={2000}>
        <TextCont style={{ padding: "1em 2em" }}>
          <Text>
            Around 1598, an indigenous priest born in Cusco named Francisco de
            Ávila wrote what is known today as "The Huarochirí Manuscript."
          </Text>
        </TextCont>
        <TextCont style={{ padding: "0em 2em" }}>
          <Text>
            In it he writes, “In ancient times the sun died. Because of his
            death it was night for five days. Rocks banged against each other.
            Mortars and grinding stones began to eat people. Buck llamas started
            to drive men. Here’s what we Christians think about it: We think
            these stories tell of the darkness following the death of our Lord
            Jesus Christ. Maybe that’s what it was” (ch. 4).
          </Text>
        </TextCont>
      </Fade>
      <Fade duration={2000}>
        <div>
          <div className="page-img-cont">
            <img src={Condor} className="page-img" alt="condorman"/>
          </div>
          <TextCont style={{ paddingTop: "0" }}>
            <PictureText>The Angel Moroni carrying the gold plates</PictureText>
          </TextCont>
        </div>
      </Fade>
      <Fade duration={2000}>
        <TextCont style={{ padding: "0em 2em" }}>
          <Text>
            This text was translated from Quechua to English for the first time
            in 1991. Other recently discovered Spanish manuscripts from the
            early 17th century, such as the "secret Jesuit documents," and new
            translations of ignored 400 year-old manuscripts reveal that the
            Incas were Christians and they worshipped the god of the Old
            Testament. They tell the history of a people during Noah's
            dispensation that God led out of the middle east and brought across
            the sea to Peru, the land of promise.
          </Text>
        </TextCont>
      </Fade>
        <div>
      <Fade duration={2000}>
          <div className="page-img-cont">
              <img src={Raqchi} className="page-img" alt="raqchi"/>
          </div>
          <TextCont style={{ paddingTop: "0" }}>
            <PictureText>
              The ruins of the Temple of Wiraqocha at Raqch’i. The red circles
              show where lumbers were inserted and veils hung from them.
            </PictureText>
          </TextCont>
      </Fade>
        </div>
      <Fade duration={2000}>
        <TextCont style={{ padding: "0em 2em" }}>
          <Text>
            More importantly, this book reviews the Incas and ancient Andean's
            beliefs in a bearded white god who visited them by coming down from
            the sky in the form of a "brightly shining man." He tenderly healed
            the sick, walked a "Holy Path" throughout the Andes, and taught them
            how to live a law of consecration. This book discusses the temples
            built to him, the sacred vestments used in the temples and were
            buried in, and the signs and tokens associated to ancient temples.
          </Text>
        </TextCont>
      </Fade>
      <Fade duration={2000}>
        <div>
          <div className="page-img-cont">
              <img src={Kuti} className="page-img" alt="kuti"/>
          </div>
          <TextCont style={{ paddingTop: "0" }}>
            <PictureText>The sign of Kuti.</PictureText>
          </TextCont>
          <div className="page-img-cont">
              <img src={Apron} className="page-img" alt="apron"/>
          </div>
        <div>
          <TextCont style={{ paddingTop: "0" }}>
            <PictureText>
              Apron found on a mummy as part of the burial dress.
            </PictureText>
          </TextCont>
        </div>
        </div>
      </Fade>
        <TextCont style={{ padding: "0em 2em" }}>
          <Text>
            Members of the Church of Jesus Christ of Latter-day Saints will find
            the evidence compelling and familiar to their beliefs.
          </Text>
        </TextCont>
        <div>
        <Fade duration={2000}>
          <div className="page-img-cont">
              <img src={Bookcover} className="page-img" alt="bookcover" />
          </div>
        </Fade>
        </div>
        <Fade duration={2000}>
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
        </Fade>
      </div>
      <Footer />
    </div>
  );
};

export default BookOrderMob;

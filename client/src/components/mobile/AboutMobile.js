import React from "react";
import { Title, Text, TitleCont, TextCont } from "../styles/MobStyles";
import { Fade } from "react-reveal";
import VanMan from "../../assets/images/VanWithMan220x300.jpg";
import NiceVan from '../../assets/images/NiceVanPic.jpg';
import Footer from "./FooterMob";

const AboutMobile = () => {
  return (
    <div>
      <div className="new-comp-pad" style={{ paddingTop: "35%", paddingBottom: "15%" }}>
        <Fade duration={2000}>
          <TitleCont>
            <Title>Dr. Van C Evans</Title>
          </TitleCont>
        </Fade>
        <Fade duration={2000}>
          <div className="page-img-cont">
            <img src={NiceVan} className="page-img" alt="van"/>
          </div>
        </Fade>
        <Fade duration={2000}>
          <TextCont style={{paddingTop: '2em'}}>
            <Text>
              Van served an LDS church mission in Peru (’79–’81) and is founder
              of Southern Cross Expeditions. He has led numerous adventure,
              humanitarian, and archaeological expeditions (he remembers those
              good ol’Indiana Jones days fondly) to Peru, Colombia, Ecuador, and
              Bolivia since 1998. He has been to every country in the Americas
              except for four and has been to Peru more than 70 times. He speaks
              Spanish, Portuguese, and some Quechua.
            </Text>
          </TextCont>
        </Fade>
        <Fade duration={2000}>
          <div className="page-img-cont">
            <img src={VanMan} className="page-img" alt="van with man"/>
          </div>
        </Fade>
        <Fade duration={2000}>
          <TextCont style={{paddingTop: '2em'}}>
            <Text>
              Dr. Evans is Ivy educated, and is known for doing research in
              Latin America on their nonprofit sectors. He is well respected
              among his peers in philanthropy and many of these countries
              elected officials. When he is not traveling or doing clinical
              psychotherapy, he enjoys preparing for the next triathlon, reading
              a good book, and spending time with his children and
              grandchildren.
            </Text>
          </TextCont>
        </Fade>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMobile;

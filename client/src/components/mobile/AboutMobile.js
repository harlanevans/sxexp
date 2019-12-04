import React from "react";
import { Title, Text, TitleCont, TextCont } from "../styles/MobStyles";
import { Fade } from "react-reveal";
import VanMan from "../../assets/images/ManVan.jpg";
// import NiceVan from '../../assets/images/NiceVanPic.jpg';
import Footer from "./FooterMob";

const AboutMobile = () => {
  return (
    <div>
      <div
        className="new-comp-pad"
        style={{ paddingTop: "35%", paddingBottom: "15%" }}
      >
        <Fade duration={2000}>
          <TitleCont>
            <Title>Your Tour Guide</Title>
          </TitleCont>
        </Fade>
        {/* <Fade duration={2000}>
          <div className="page-img-cont">
            <img src={NiceVan} className="page-img" alt="van"/>
          </div>
        </Fade> */}
        <Fade duration={2000}>
          <TextCont style={{ paddingTop: "2em" }}>
            <Text>
              Van C. Evans served a church mission in Peru (’79–’81) where he
              learned Spanish and some Quechua. From 2000 - 2006 he owned and
              operated an eco-tourist resort in the Peruvian Amazon. He has been
              to Perú more than 75 times and has led numerous expeditions and
              tours to Peru, Colombia, Ecuador, and Bolivia since 1998. He has
              Master's degrees from the University of Utah and University of
              Pennsylvania. He was trained as a research sociologist at Indiana
              University–Purdue University, where he received his doctorate. He
              is the author of Willka Wasin Wiraqocha — The House of the Lord.
              He is also the founder of Generations Humanitarian, a nonprofit
              that builds and operates orphanages and drop-in centers for street
              children in Latin America.
            </Text>
          </TextCont>
        </Fade>
        <Fade duration={2000}>
          <div className="page-img-cont">
            <img
              src={VanMan}
              className="page-img van-image"
              alt="van with man"
            />
          </div>
        </Fade>
        {/* <Fade duration={2000}>
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
        </Fade> */}
      </div>
      <Footer />
    </div>
  );
};

export default AboutMobile;

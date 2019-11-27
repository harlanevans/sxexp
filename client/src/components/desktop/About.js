import React from "react";
import Footer from "./Footer";
import { Title, TitleCont, TextWhite } from "../styles/Styles";
import { Fade } from "react-reveal";
import VanImageOne from "../../assets/images/VanWithMan220x300.jpg";
import VanImageTwo from "../../assets/images/NiceVanPic.jpg";

const About = () => {
  return (
    <div>
      <div className="comp-cont-pages">
        <Fade duration={2000} top>
          <TitleCont style={{ padding: "2em 0em 2em" }}>
            <Title style={{fontSize: "2em"}}>Your Tour Leader </Title>
          </TitleCont>
        </Fade>
        <Fade duration={2000} delay={500}>
          <div className="main-row">
            <div className="col-one-top row-in-col">
              <TextWhite
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  lineHeight: "1.5em"
                }}
              >
                Van C. Evans served a church mission in Peru (’79–’81) where he
                learned Spanish and some Quechua. From 2000 - 2006 he owned and
                operated an eco-tourist resort in the Peruvian Amazon. He has
                been to Perú more than 75 times and has led numerous expeditions
                and tours to Peru, Colombia, Ecuador, and Bolivia since 1998. He
                has Master's degrees from the University of Utah and University
                of Pennsylvania. He was trained as a research sociologist at
                Indiana University–Purdue University, where he received his
                doctorate. He is the author of Willka Wasin Wiraqocha — The
                House of the Lord. He is also the founder of Generations
                Humanitarian, a nonprofit that builds and operates orphanages
                and drop-in centers for street children in Latin America.
              </TextWhite>
            </div>
            <div className="col-two row-in-col">
              <img
                src={VanImageOne}
                className="van-img-one"
                alt="van with man"
              />
            </div>
          </div>
        </Fade>
        {/* <Fade duration={2000} delay={500}>
          <div className="main-row-two">
            <div className="col-two row-in-col">
              <img src={VanImageTwo} className="van-img-two" alt='professional van'/>
            </div>
            <div className="col-one-bottom row-in-col">
              <TextWhite
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  lineHeight: "3em"
                }}
              >
                Dr. Evans is Ivy educated, and is known for doing research in
                Latin America on their nonprofit sectors. He is well respected
                among his peers in philanthropy and many of these countries
                elected officials. When he is not traveling or doing clinical
                psychotherapy, he enjoys preparing for the next triathlon,
                reading a good book, and spending time with his children and
                grandchildren.
              </TextWhite>
            </div>
          </div>
        </Fade> */}
      </div>
      <Footer />
    </div>
  );
};

export default About;

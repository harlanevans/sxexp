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
          <TitleCont style={{padding: "2em 0em 2em"}}>
            <Title>Dr. Van C Evans</Title>
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
                  lineHeight: "3em"
                }}
                >
                Van served an LDS church mission in Peru (’79–’81) and is
                founder of Southern Cross Expeditions. He has led numerous
                adventure, humanitarian, and archaeological expeditions (he
                remembers those good ol’Indiana Jones days fondly) to Peru,
                Colombia, Ecuador, and Bolivia since 1998. He has been to every
                country in the Americas except for four and has been to Peru
                more than 70 times. He speaks Spanish, Portuguese, and some
                Quechua.
              </TextWhite>
            </div>
            <div className="col-two row-in-col">
              <img src={VanImageOne} className="van-img-one" alt='van with man'/>
            </div>
          </div>
        </Fade>
        <Fade duration={2000} delay={500}>
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
        </Fade>
      </div>
      <Footer />
    </div>
  );
};

export default About;

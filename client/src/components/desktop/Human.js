import React from "react";
import { Title, TitleCont, Text, TextCont } from "../styles/Styles";
import { Fade } from "react-reveal";
import Child from "../../assets/images/Child2.jpeg";
import Footer from "./Footer";

const Human = () => {
  return (
    <div>
      <div className="comp-cont-small">
        <Fade duration={2000} top>
          <TitleCont>
            <Title>Humanitarian Involvement</Title>
          </TitleCont>
        </Fade>
        <Fade duration={2000} delay={500}>
        <div className="row img-cont">
          <img src={Child} className="human-img" />
        </div>
        </Fade>
        <Fade duration={2000} delay={500}>
        <div className="row">
          <TextCont>
            <Text>
              Dr. Evans is also the founder of{" "}
              <a
                href="https://genhu.org/"
                target="_blank"
                className="human-link"
                >
                Generations Humanitarian
              </a>{" "}
              (2008). Generations Humanitiarian builds and operates orphanages
              and drop-in centers for street children in Latin America. As of
              June 2018, they have helped rear more than <span>1494</span>{" "}
              children, feeding more than 15,000 meals every month to children,
              for a total of <span>735,822</span> meals to date. Your Book of
              Mormon Interest tour may include a stop at one of our orphanages
              just outside of Cusco, Peru. Each trip to Peru, Colombia, or
              Ecuador includes a humanitairn element of taking down suitcases of
              socks and underwear to poor, orphaned, refugee, or victims of
              armed conflict children.
            </Text>
          </TextCont>
        </div>
              </Fade>
        <Fade duration={2000} delay={500}>
        <div className="row">
          <TextCont>
            <Text>
              Visit the{" "}
              <a
                href="https://genhu.org/"
                target="_blank"
                className="human-link"
                >
                Generations Humanitarian
              </a>{" "}
              site or make a donation.
            </Text>
          </TextCont>
        </div>
                </Fade>
      </div>
      <Footer />
    </div>
  );
};

export default Human;

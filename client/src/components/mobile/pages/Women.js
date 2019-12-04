import React from "react";
import {
  Title,
  TitleCont,
  SubTitle
} from "../../styles/MobStyles";
import { Fade } from "react-reveal";

import WomenImg from "../../../assets/images/Carousel/Uroswomen.jpg";

const Women = () => {
  return (
    <div className="page-cont" style={{ padding: "6em 0em", boxShadow: "0 4px 8px -8px black"}}>
      <Fade duration={2000}>
        <TitleCont>
          <Title>Join us 2020</Title>
        </TitleCont>
      </Fade>
      <Fade duration={2000}>
        <div className="page-img-cont">
          <img src={WomenImg} className="page-img" alt="women"/>
        </div>
      </Fade>
      <Fade duration={2000}>
        <TitleCont style={{ padding: '.5em 2em' }}>
          <SubTitle>
            Our Peruvian expeditions connects you to the people unlike any other
            offered today
          </SubTitle>
        </TitleCont>
      </Fade>
    </div>
  );
};

export default Women;

import React from "react";
import {
  Title,
  TitleCont,
  SubTitle
} from "../../styles/MobStyles";
import { Fade } from "react-reveal";
import PrayerIMG from "../../../assets/images/Yanantin.jpg"

const Prayer = () => {
  return (
    <div className="page-cont" style={{ padding: "6em 0em", boxShadow: "0 4px 8px -8px black" }}>
      <Fade duration={2000}>
        <TitleCont>
          <Title>Ancient Andean Prayer Circle</Title>
        </TitleCont>
      </Fade>
      <Fade duration={2000}>
        <div className="page-img-cont">
          <img src={PrayerIMG} className="page-img" alt="prayer"/>
        </div>
      </Fade>
      <Fade duration={2000}>
        <TitleCont style={{ padding: '.5em 2em' }}>
          <SubTitle>Join an LDS Interest tour in 2020</SubTitle>
        </TitleCont>
      </Fade>
    </div>
  );
};

export default Prayer;

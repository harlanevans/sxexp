import React from "react";
import {
  Title,
  TitleCont,
  SubTitle
} from "../../styles/MobStyles";
import { Fade } from "react-reveal";
import Machu from "../../../assets/images/mapiFAVE.jpg";

const Welcome = () => {
  return (
    <div className="page-cont" style={{ padding: "6em 0em", boxShadow: "0 4px 8px -8px black"}} id="/">
  
      <Fade duration={2000}>
        <TitleCont>
          <Title>Mystic Machu Picchu</Title>
        </TitleCont>
      </Fade>
      <Fade duration={2000}>
        <div className="page-img-cont">
          <img src={Machu} className="page-img" />
        </div>
      </Fade>
      <Fade duration={2000}>
        <TitleCont style={{padding: '.5em 2em'}}>
          <SubTitle> 
          Just the beginning of the wonders...
          </SubTitle>
        </TitleCont>
      </Fade>
    </div>
  );
};

export default Welcome;

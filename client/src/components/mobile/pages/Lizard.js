import React from "react";
import {
  Title,
  TitleCont,
  SubTitle
} from "../../styles/MobStyles";
import { Fade } from "react-reveal";
import Galapagos from "../../../assets/images/Caoursel/GalapagosEcuador.jpg";

const Lizard = () => {
  return (
    <div className="page-cont" style={{ padding: '6em 0em', boxShadow: "0 4px 8px -8px black"}}>
      <Fade duration={2000}>
        <TitleCont>
          <Title>Galápagos & Ecuador 2020</Title>
        </TitleCont>
      </Fade>
      <Fade duration={2000}>
        <div className="page-img-cont">
          <img src={Galapagos} className="page-img" alt='lizard'/>
        </div>
      </Fade>
      <Fade duration={2000}>
        <TitleCont style={{ padding: '.5em 2em' }}>
          <SubTitle>
            Play tag with sea lions. Stay in charming Otavalo.
          </SubTitle>
        </TitleCont>
      </Fade>
    </div>
  );
};

export default Lizard;

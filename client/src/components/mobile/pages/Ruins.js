import React from "react";
import {
  Title,
  TitleCont,
  Text,
  TextCont,
  SubTitle
} from "../../styles/MobStyles";
import { Fade } from "react-reveal";
import RuinsIMG from "../../../assets/images/Ruins.jpg"

const Ruins = () => {
  return (
    <div className="page-cont">
      <Fade duration={2000}>
        <TitleCont>
          <Title>Find Ancient Ruins</Title>
        </TitleCont>
      </Fade>
      <Fade duration={2000}>
        <div className="page-img-cont">
          <img src={RuinsIMG} className="page-img" />
        </div>
      </Fade>
      <Fade duration={2000}>
        <TitleCont>
          <SubTitle>Explore the Past</SubTitle>
        </TitleCont>
      </Fade>
      <Fade duration={2000}>
        <TextCont>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            commodo, neque et dapibus vulputate, sapien metus sagittis leo, nec
            accumsan nibh mi nec mauris.
          </Text>
        </TextCont>
      </Fade>
    </div>
  );
};

export default Ruins;

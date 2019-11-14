import React from "react";
import {
  Title,
  TitleCont,
  Text,
  TextCont,
  SubTitle
} from "../../styles/MobStyles";
import { Fade } from "react-reveal";
import Machu from "../../../assets/images/MachuPichu.jpg";

const Welcome = () => {
  return (
    <div className="page-cont">
      <Fade duration={2000}>
        <TitleCont>
          <Title>Welcome to Southern Cross Expeditions</Title>
        </TitleCont>
      </Fade>
      <Fade duration={2000}>
        <div className="page-img-cont">
          <img src={Machu} className="page-img" />
        </div>
      </Fade>
      <Fade duration={2000}>
        <TitleCont>
          <SubTitle>Hike Machu Pichu</SubTitle>
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

export default Welcome;

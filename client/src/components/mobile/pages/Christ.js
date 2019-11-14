import React from "react";
import {
  Title,
  TitleCont,
  Text,
  TextCont,
  SubTitle
} from "../../styles/MobStyles";
import { Fade } from "react-reveal";

import BOM from "../../../assets/images/BOM.jpg";

const Christ = () => {
  return (
    <div className="page-cont">
      <Fade duration={2000}>
        <TitleCont>
          <Title>The History of Christ</Title>
        </TitleCont>
      </Fade>
      <Fade duration={2000}>
        <div className="page-img-cont">
          <img src={BOM} className="page-img" />
        </div>
      </Fade>
      <Fade duration={2000}>
        <TitleCont>
          <SubTitle>Our Savior in Latin America</SubTitle>
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

export default Christ;

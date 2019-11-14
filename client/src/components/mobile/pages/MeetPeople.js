import React from "react";
import {
  Title,
  TitleCont,
  Text,
  TextCont,
  SubTitle
} from "../../styles/MobStyles";
import { Fade } from "react-reveal";

import Child from "../../../assets/images/Child.jpg";

const MeetPeople = () => {
  return (
    <div className="page-cont">
      <Fade duration={2000}>
        <TitleCont>
          <Title> Meet the People</Title>
        </TitleCont>
      </Fade>
      <Fade duration={2000}>
        <div className="page-img-cont">
          <img src={Child} className="page-img" />
        </div>
      </Fade>
      <Fade duration={2000}>
        <TitleCont>
          <SubTitle>New Faces, Old Friendships</SubTitle>
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

export default MeetPeople;

import React from "react";
import { Title, Text, TitleCont, TextCont } from "../styles/MobStyles";
import { Fade } from "react-reveal";
import Footer from "./FooterMob";

import Image from '../../assets/images/Hat.jpg';

const NoMatchMobile = () => {
  return (
    <div>

    <div className='new-comp-pad'>
      <Fade>

        <TitleCont>
          <Title>NoMatchMobile</Title>
        </TitleCont>
      </Fade>
      <div className='page-img-cont'>
        <img src={Image} className='page-img' />
      </div>
      <Fade>
        <TextCont>
          <Text>Lorem ipsum</Text>
        </TextCont>
      </Fade>
    </div>
    <Footer />
    </div>
  );
};

export default NoMatchMobile;
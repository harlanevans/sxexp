import React from "react";
import { Title, Text, TitleCont, TextCont } from "../styles/MobStyles";
import { Fade } from "react-reveal";
import Footer from "./FooterMob";

import Image from "../../assets/images/Hat.jpg";

const NoMatchMobile = () => {
  return (
    <div>
      <div className="new-comp-pad"
        style={{ paddingTop: "35%", paddingBottom: "15%" }}
      
      >
        <Fade>
          <TitleCont>
            <Title>Error - 404 No Matching Page</Title>
          </TitleCont>
        </Fade>
        <div className="page-img-cont">
          <img src={Image} className="page-img" />
        </div>
        <Fade>
          <TextCont>
            <Text>
              For some reason, the URL you found doesn't exist in our website!
              Please click the logo to go home.
            </Text>
          </TextCont>
        </Fade>
      </div>
      <Footer />
    </div>
  );
};

export default NoMatchMobile;

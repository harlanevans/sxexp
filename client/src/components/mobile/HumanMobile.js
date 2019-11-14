import React from "react";
import { Title, Text, TitleCont, TextCont } from "../styles/MobStyles";
import { Fade } from "react-reveal";
import Footer from "./FooterMob";

import Child from "../../assets/images/Child2.jpeg";

const HumanMobile = () => {
  return (
    <div>
      <div className="new-comp-pad">
        <Fade>
          <TitleCont>
            <Title>Humanitarian Involvement</Title>
          </TitleCont>
        </Fade>
        <div className="page-img-cont">
          <img src={Child} className="page-img" />
        </div>
        <Fade>
          <TextCont style={{ paddingTop: "2em" }}>
            <Text>
              Dr. Evans is also the founder of{" "}
              <a
                href="https://genhu.org/"
                target="_blank"
                className="human-link"
              >
                {" "}
                Generations Humanitarian{" "}
              </a>{" "}
              (2008). Generations Humanitiarian builds and operates orphanages
              and drop-in centers for street children in Latin America. As of
              June 2018, they have helped rear more than 1494 children, feeding
              more than 15,000 meals every month to children, for a total of
              735,822 meals to date.
            </Text>
          </TextCont>
          <TextCont>
            <Text>
              Your Book of Mormon Interest tour may include a stop at one of our
              orphanages just outside of Cusco, Peru. Each trip to Peru,
              Colombia, or Ecuador includes a humanitairn element of taking down
              suitcases of socks and underwear to poor, orphaned, refugee, or
              victims of armed conflict children.
            </Text>
          </TextCont>
          <TextCont>
            <Text>
              Visit the
              <a
                href="https://genhu.org/"
                target="_blank"
                className="human-link"
              >
                {" "}
                Generations Humanitarian{" "}
              </a>
              site or make a donation.
            </Text>
          </TextCont>
        </Fade>
      </div>
      <Footer />
    </div>
  );
};

export default HumanMobile;

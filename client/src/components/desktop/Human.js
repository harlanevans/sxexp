import React from "react";
import { Title, TitleCont, Text, TextCont } from "../styles/Styles";
import { Fade } from "react-reveal";
import Boys from "../../assets/images/MonteriaBoys.jpeg";
import Footer from "./Footer";

const Human = () => {
  return (
    <div>
      <div className="comp-cont-pages">
        <Fade duration={2000} top>
          <TitleCont style={{ padding: "2em 0em 2em" }}>
            <Title>Humanitarian Work</Title>
          </TitleCont>
        </Fade>

        <Fade duration={2000} delay={500}>
          <div className="row" style={{ padding: "2em 0em" }}>
            <TextCont>
              <Text>
                Southern Cross tours and expeditions usually include a visit to
                one of the homes operated by Generations Humanitarian, a
                501(c)(3) nonprofit organization that builds and operates
                orphanages and drop-in centers for street children in Latin
                America. Each trip to Peru, Colombia, or Ecuador may include a
                humanitarian element of taking down suitcases of socks and
                underwear to poor, orphaned, refugee, or victims of armed
                conflict children.
                {/* Dr. Evans is also the founder of{" "}
                <a
                  href="https://genhu.org/"
                  target="_blank"
                  className="human-link"
                  rel="noopener noreferrer"
                >
                  Generations Humanitarian
                </a>{" "}
                (2008). Generations Humanitiarian builds and operates orphanages
                and drop-in centers for street children in Latin America. As of
                June 2018, they have helped rear more than{" "}
                <span className="human-stat">1494</span> children, feeding more
                than 15,000 meals every month to children, for a total of{" "}
                <span className="human-stat">735,822</span> meals to date. Your
                Book of Mormon Interest tour may include a stop at one of our
                orphanages just outside of Cusco, Peru. Each trip to Peru,
                Colombia, or Ecuador includes a humanitairn element of taking
                down suitcases of socks and underwear to poor, orphaned,
                refugee, or victims of armed conflict children. */}
              </Text>
            </TextCont>
          </div>
        </Fade>
        <Fade duration={2000} delay={500}>
          <div className="row">
            <TextCont>
              <Text>
                Visit the{" "}
                <a
                  href="https://genhu.org/"
                  target="_blank"
                  className="human-link"
                  rel="noopener noreferrer"
                >
                  Generations Humanitarian
                </a>{" "}
                site and make a donation.
              </Text>
            </TextCont>
          </div>
        </Fade>
        <Fade duration={2000} delay={500}>
          <div className="row img-cont" style={{padding: "1em 0em 2em"}}>
            <img src={Boys} className="human-img" alt="Boys" />
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
};

export default Human;

import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fade } from "react-reveal";

import { CTitle, CSubTitle } from "../../styles/Styles";
import "../../styles/Desktop.css";

import Women from "../../../assets/images/Uroswomen.jpg";
import MachuPichu from "../../../assets/images/mapiFAVE.jpg";
import Galapagos from "../../../assets/images/GalápagosEcuador.jpg";
import Yanantin from "../../../assets/images/Yanantin.jpg";

class CarouselMain extends React.Component {
  render() {
    return (
      <Carousel fade indicators={false} interval={5000} pauseOnHover={false}>
        <Carousel.Item>
          <img
            src={MachuPichu}
            className="carousel-img top-left-animation"
            alt="child"
          />

          <Carousel.Caption className="carousel-cap">
            <Fade delay={250} duration={1000}>
              <CTitle>Mystic Machu Pichu</CTitle>
              <CSubTitle>Just the beginning of the wonders...</CSubTitle>
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Women}
            className="carousel-img bottom-right-animation"
            alt="child"
          />
          <Carousel.Caption className="carousel-cap">
            <Fade delay={250} duration={1000}>
              <CTitle>Join us in 2020</CTitle>
              <CSubTitle>
                Our Peruvian expeditions connects you to the people unlike any
                other offered today
              </CSubTitle>
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Galapagos}
            className="carousel-img bottom-right-animation"
            alt="child"
          />
          <Carousel.Caption className="carousel-cap">
            <Fade delay={250} duration={1000}>
              <CTitle>Galápagos & Ecuador 2020</CTitle>
              <CSubTitle>
                Play tag with sea lions. Stay in charming Otavalo.
              </CSubTitle>
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Yanantin}
            className="carousel-img bottom-right-animation"
            alt="child"
          />
          <Carousel.Caption className="carousel-cap">
            <Fade delay={250} duration={1000}>
              <CTitle>Ancient Andean Prayer Circle</CTitle>
              <CSubTitle>Join an LDS Interest tour in 2020</CSubTitle>
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselMain;

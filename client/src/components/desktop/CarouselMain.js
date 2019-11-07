import React from "react";
import { Carousel } from "react-bootstrap";
import { Fade } from "react-reveal";

import { CTitle, CSubTitle } from "../styles/Styles";
import "../styles/Desktop.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ChildImage from "../../assets/images/Child.jpg";
import MachuPichu from "../../assets/images/MachuPichu.jpg";
import BOM from "../../assets/images/BOM.jpg";
import Ruins from "../../assets/images/Ruins.jpg";

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
              <CTitle>Hike Machu Pichu</CTitle>
              <CSubTitle>See the Wonder of the World</CSubTitle>
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={BOM}
            className="carousel-img bottom-right-animation"
            alt="child"
            />
          <Carousel.Caption className="carousel-cap">
            <Fade delay={250} duration={1000}>
            <CTitle>The History of Christ</CTitle>
            <CSubTitle>Our Savior in Latin America</CSubTitle>
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ChildImage}
            className="carousel-img bottom-right-animation"
            alt="child"
            />
          <Carousel.Caption className="carousel-cap">
          <Fade delay={250} duration={1000}>
            <CTitle>Meet the People</CTitle>
            <CSubTitle>New Faces, Old Friendships</CSubTitle>
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Ruins}
            className="carousel-img bottom-right-animation"
            alt="child"
            />
          <Carousel.Caption className="carousel-cap">
        <Fade delay={250} duration={1000}>
            <CTitle>Find Ancient Ruins</CTitle>
            <CSubTitle>Explore the Past</CSubTitle>
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselMain;

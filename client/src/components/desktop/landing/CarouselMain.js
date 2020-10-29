import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fade } from "react-reveal";

import { CTitle, CSubTitle } from "../../styles/Styles";
import "../../styles/Desktop.css";

import Women from "../../../assets/images/Carousel/Uroswomen.jpg";
import MachuPichu from "../../../assets/images/Carousel/mapiFAVE.jpg";
import Yanantin from "../../../assets/images/Carousel/Yanantin.jpg";
import SaltMines from '../../../assets/images/Carousel/SaltMines.jpg';
import Huacachina from '../../../assets/images/Carousel/Huacachina.jpg';
import OrphanGirls from '../../../assets/images/Carousel/GirasolGirls.jpg';
import Nazca from '../../../assets/images/Carousel/Nazca.jpg';
import OnTopOfWorld from '../../../assets/images/Carousel/OnTopOfWorld.jpg';
import Cuzco from '../../../assets/images/Carousel/CuscoPlaza.jpg';
// import Galapagos from "../../../assets/images/GalapagosEcuador.jpg";

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
              <CTitle>Mystic Machu Picchu</CTitle>
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
              <CTitle>Join us in 2021</CTitle>
              <CSubTitle>
                Our Peruvian expeditions connect you to the people unlike any
                other offered today
              </CSubTitle>
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Yanantin}
            className="carousel-img top-left-animation"
            alt="child"
          />
          <Carousel.Caption className="carousel-cap">
            <Fade delay={250} duration={1000}>
              <CTitle>Ancient Andean Prayer Circle</CTitle>
              <CSubTitle>Join an LDS Interest tour in 2021</CSubTitle>
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={SaltMines}
            className="carousel-img bottom-right-animation"
            alt="SaltMines"
          />
          <Carousel.Caption className="carousel-cap">
            <Fade delay={250} duration={1000}>
              <CTitle>Inca Salt Mines</CTitle>
              <CSubTitle>
                Hike down the Inca trail from the mines to the Sacred Valley
              </CSubTitle>
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Huacachina}
            className="carousel-img top-left-animation"
            alt="child"
          />
          <Carousel.Caption className="carousel-cap">
            <Fade delay={250} duration={1000}>
              <CTitle>The Oasis of Huacachina</CTitle>
              <CSubTitle>
                The most fun you will have on a dune buggy ride.
              </CSubTitle>
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={OrphanGirls}
            className="carousel-img bottom-right-animation"
            alt="child"
          />
          <Carousel.Caption className="carousel-cap">
            <Fade delay={250} duration={1000}>
              <CTitle>Little Orphan Girls</CTitle>
              <CSubTitle>
                Volunteer with our children and homes in Peru or Colombia
              </CSubTitle>
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Nazca}
            className="carousel-img top-left-animation"
            alt="child"
          />
          <Carousel.Caption className="carousel-cap">
            <Fade delay={250} duration={1000}>
              <CTitle>The Hummingbird</CTitle>
              <CSubTitle>The Nazca Lines</CSubTitle>
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={OnTopOfWorld}
            className="carousel-img bottom-right-animation"
            alt="child"
          />
          <Carousel.Caption className="carousel-cap">
            <Fade delay={250} duration={1000}>
              <CTitle>Choquequirao</CTitle>
              <CSubTitle>
                {" "}
                Three days and nights. Six mules. One spectacular experience.
              </CSubTitle>
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Cuzco}
            className="carousel-img top-left-animation"
            alt="child"
          />
          <Carousel.Caption className="carousel-cap">
            <Fade delay={250} duration={1000}>
              <CTitle>Main Plaza of Cusco</CTitle>
              <CSubTitle>
                The oldest continuously inhabited city in the western
                hemisphere.
              </CSubTitle>
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselMain;

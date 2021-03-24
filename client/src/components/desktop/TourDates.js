import React from "react";
import { Title, TitleCont, TextCont, Text } from "../styles/Styles";
import { Fade } from "react-reveal";
import Footer from "./Footer";

const TourDates = () => {
  return (
    <div>
      <div className="comp-cont-pages">
        <Fade duration={2000}>
          <TitleCont>
            <Title>LDS Interest Tour Dates</Title>
          </TitleCont>
        </Fade>
        <Fade duration={2000}>
          <TextCont style={{ paddingTop: "1em" }}>
            <Text>
              Join us in 2021 for a custom, luxurious, and expert-led LDS tour.
              These tours are limited to 24 persons and include superior trains
              and boats as well as four- and five-star hotels. Your health and
              safety at these altitudes and regions always come first. For 20
              years, Southern Cross Expeditions has given LDS members an
              unforgettable, and even spiritual, tour throughout Peru. This LDS
              Interest tour is not available anywhere else. Come with us along
              the Holy Path journey of the bearded white god Wiraqocha.
            </Text>
          </TextCont>
        </Fade>
        <Fade duration={2000}>
          <div style={style.listCont}>
            <Text style={style.list}>
              <Text style={style.subtitle}>Sample Itinerary</Text>
              <ol>
                <li>Fly to Peru</li>
                <li>Cusco, Sacred Valley of the Incas</li>
                <li>Moray, Salt Mines, Ollantaytambo</li>
                <li>Machu Picchu</li>
                <li>Cusco, Chincheros, Temple of Coricancha</li>
                <li>Urcos, Temple of Raqch'i, Azul Wasi, Cusco</li>
                <li>Fly to Juliaca, visit float reed islands, the Uros</li>
                <li>Fly to Lima, have dinner on the coast</li>
                <li>Home</li>
              </ol>
            </Text>
            <Text style={style.list}>
              <Text style={style.subtitle}>Open Dates</Text>
              <ul>
                <li>July 10 - 18, 2021</li>
                <li style={{padding: '0', margin: '0', height: '1em'}}>October 9 - 17, 2021</li>
                <span style={{ fontSize: '.75em'}}>
                (in conjunction with Moon's Rare Books and Generations Humanitarian)
                </span>
              </ul>
            </Text>
          </div>
        </Fade>
        <Fade duration={2000}>
          <TextCont style={{ padding: "0em" }}>
            <Text style={style.subtitle}>Tour Cost: $3180</Text>
          </TextCont>
          <TextCont>
            <Text>
              Plus all airfare (USA city to Lima RT and Peru domestic airfare).
              Price based on double occupancy. Includes a $500 non-refundable
              deposit if you cancel for any reason. Please sign up no later than
              90 days prior to departure. Those choosing single occupancy will
              pay an additional $500 for Lima, Cusco, and other hotels.
              Includes: travel insurance, 4-5 star hotels, bus, boat, tours,
              ruins entrances, breakfast, some lunches, and the Machu Picchu
              train, entrance, and tour. Does not include: some lunches and all
              dinners, personal taxi rides, souvenirs, tips, incidentals.
              Itinerary subject to change based on airline schedules. Payment in
              full deadline for tour: 90 days prior to departure.
            </Text>
          </TextCont>
          <Text>We also do custom family tours of 10 or more persons.</Text>
          <Text>
            <a href="mailto: van@genhu.org" style={{ color: '#007bff'}}>Email us</a> about trip
            availability.
          </Text>
          <div style={{ padding: "2em" }}></div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
};

export default TourDates;

const style = {
  listCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    padding: "1em 0em 0em"
  },
  list: {
    textAlign: "left"
  },
  subtitle: {
    fontSize: "1.5em",
    border: "solid 1px gray",
    boxShadow: "0 1px 2px gray",
    padding: "0em 1em",
    borderRadius: "3px",
    fontFamily: "'Amiri', serif",
  }
};

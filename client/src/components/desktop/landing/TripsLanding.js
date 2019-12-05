import React from 'react';
import { Fade } from "react-reveal";
import { Link } from 'react-router-dom';

import { Title, TitleCont, Text, TextCont, Button, ButtonCont} from "../../styles/Styles";

const TripsLanding = () => {
  return (
    <div className="comp-cont-small">
      <Fade duration={2000}>
        <TitleCont>
          <Title>LDS Interest Trips</Title>
        </TitleCont>
      </Fade>
      <Fade duration={2000} delay={500}>
        <TextCont>
          <Text>
            No one is more qualified to take you on a tour of Peru than Southern
            Cross Expeditions. After more than 22 years, we have taken more than
            600 people on archaeological, humanitarian, and tourist expeditions
            to Perú, Bolivia, Ecuador, and Colombia. Your tour guide is Van
            Evans, the author of “The House of the Lord” and the only one who
            can take you inside the world of the Andean shaman and their ancient
            religion. Walk where Jesus walked. We will take you to places not
            one in a thousand tourists get to go.
          </Text>
        </TextCont>
      </Fade>
      <Fade duration={2000} delay={500}>
        <TextCont>
          <Text>
            Trips are between 9 - 11 days, depending on the itinerary. See the
            Tour Dates page for more details.
          </Text>
        </TextCont>
      </Fade>
      <Fade duration={2000} delay={500}>
        <ButtonCont>
          <Link to="/tour-dates">
            <Button className="button-two">See Tour Dates</Button>
          </Link>
        </ButtonCont>
      </Fade>
      <Fade duration={2000} delay={500}>
        <TextCont style={{ padding: "0" }}>
          <Text style={{ padding: "0", margin: "0" }}>
            We do custom tours for groups of 10 or more persons.
          </Text>
        </TextCont>
        <TextCont style={{ padding: "0" }}>
          <Text style={{ padding: "0" }}>
            Call 801-859-1033 or{" "}
            <a href="mailto: van@genhu.org" style={{ color: "#007bff" }}>
              email us
            </a>{" "}
            for more information.
          </Text>
        </TextCont>
      </Fade>
    </div>
  );
}

export default TripsLanding;
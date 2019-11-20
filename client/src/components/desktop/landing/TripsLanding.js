import React from 'react';
import { Fade } from "react-reveal";
import { Link } from 'react-router-dom';

import { Title, TitleCont, Text, TextCont, Button, ButtonCont} from "../../styles/Styles";

const TripsLanding = () => {
  return (
    <div className="comp-cont-small">
      <Fade duration={2000} top>
        <TitleCont>
          <Title>LDS Interest Trips</Title>
        </TitleCont>
      </Fade>
      <Fade duration={2000} delay={500}>
        <TextCont>
          <Text>
            No one is more qualified to take you on a tour of Peru than Southern
            Cross Expeditions. After more than 20 years, we have taken more than
            600 persons on archaeological, humanitarian, and tourist expeditions
            to Perú, Bolivia, Ecuador, and Colombia. Your tour guide is Van
            Evans, the author of “The House of the Lord” and the only one who
            can take you inside the world of the Andean shaman and their ancient
            religion. Walk where Jesus walked. Dr. Evans will take you to places
            not one in 5000 tourists get to see.
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
        <TextCont>
          <Text>We do custom tours for groups of 10 or more persons.
          </Text>
        </TextCont>
        <TextCont>
          <Text>
            Call 801-859-1033 or email{" "}
            <a href="mailto: van@southerncrossexp.com" className="email">
              van@southerncrossexp.com for more information.
            </a>
          </Text>
        </TextCont>
      </Fade>
    </div>
  );
}

export default TripsLanding;
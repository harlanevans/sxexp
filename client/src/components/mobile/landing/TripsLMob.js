import React from 'react';
import { TitleCont, Title, TextCont, Text, Button, ButtonCont } from '../../styles/MobStyles';
import { Link } from 'react-router-dom';

const TripsLMob = () => {
  return (
    <div className="comp-padding">
      <TitleCont style={{ padding: "0em 0em 2em" }}>
        <Title>LDS Interest Trips</Title>
      </TitleCont>
      <TextCont>
        <Text>
          No one is more qualified to take you on a tour of Peru than Southern
          Cross Expeditions. After more than 22 years, we have taken more than
          600 persons on archaeological, humanitarian, and tourist expeditions
          to Perú, Bolivia, Ecuador, and Colombia.
        </Text>
      </TextCont>
      <TextCont>
        <Text>
          Your tour guide is Van Evans, the author of “The House of the Lord”
          and the only one who can take you inside the world of the Andean
          shaman and their ancient religion. Walk where Jesus walked. Dr. Evans
          will take you to places not one in 5000 tourists get to see.
        </Text>
      </TextCont>
      <TextCont>
        <Text>
          Trips are between 9 - 11 days, depending on the itinerary. See the
          Tour Dates page for more details.
        </Text>
      </TextCont>
      <ButtonCont>
        <Link to="/tour-dates">
          <Button>Tour Dates</Button>
        </Link>
      </ButtonCont>
      <TextCont style={{paddingTop: '1em'}}>
        <Text>
          We do custom tours for groups of 10 or more persons. Call 801-859-1033
          or <a href="mailto: van@genhu.org" style={{ color: "#007bff" }}>
            email us
            </a>
            {" "}for more information.
        </Text>
      </TextCont>
    </div>
  );
}

export default TripsLMob;
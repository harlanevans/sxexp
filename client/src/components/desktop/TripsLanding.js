import React from 'react';
import { Fade } from "react-reveal";
import { Link } from 'react-router-dom';

import { Title, TitleCont, Text, TextCont, Button, ButtonCont} from "../styles/Styles";

const TripsLanding = () => {
  return (
      <div className="comp-cont">
        <Fade duration={2000} top>
          <TitleCont>
            <Title>LDS Interest Trips</Title>
          </TitleCont>
        </Fade>
        <Fade duration={2000} delay={500}>
          <TextCont>
            <Text>
              Visit ancient ruins dicovered by old explorers and archaeologists.
              With trips to Peru from 5-20 days, you'll truly see the beauty of
              Peruvian culture, people, and lands built thousands of years ago.
            </Text>
          </TextCont>
        </Fade>
      <Fade duration={2000} delay={500}>
          <ButtonCont>
            <Link to='/tour-dates'>
            <Button className='button-two'>See Tour Dates</Button>
            </Link>
          </ButtonCont>
        </Fade>
      </div>
  );
}

export default TripsLanding;
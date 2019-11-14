import React from 'react';
import { TitleCont, Title, TextCont, Text, Button, ButtonCont, TanBackground } from '../../styles/MobStyles';
import { Link } from 'react-router-dom';

const TripsLMob = () => {
  return (
    <div className='comp-padding'>
      <TitleCont>
        <Title>LDS Interest Trips</Title>
      </TitleCont>
      <TextCont>
        <Text>
          Visit ancient ruins dicovered by old explorers and archaeologists.
          With trips to Peru from 5-20 days, you'll truly see the beauty of
          Peruvian culture, people, and lands built thousands of years ago.
        </Text>
      </TextCont>
      <ButtonCont>
        <Link to="/bookorder-mob">
          <Button>Tour Dates</Button>
        </Link>
      </ButtonCont>
    </div>
  );
}

export default TripsLMob;
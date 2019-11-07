import React from 'react';
import { Title, TitleCont, TextCont, Text } from "../styles/Styles";
import { Fade } from "react-reveal";
import Hat from '../../assets/images/Hat.jpg';
import Footer from './Footer';


const Calendar = () => {
  return(
    <div>

    <div className='comp-cont-small'>
    <Fade duration={2000} top>
      <TitleCont>
        <Title>Tour Dates</Title>
      </TitleCont>
    </Fade>
    <Fade duration={2000} delay={750}>
    <div className='img-cont row'>
    <img src={Hat} className='human-img'/>
    </div>
    </Fade>
    <TextCont>
      <Text>
        Tour Dates Coming Soon!
      </Text>
    </TextCont>
    </div>
    <Footer />
    </div>
  )
}

export default Calendar;
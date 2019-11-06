import React from 'react';
import { Title, TitleCont } from "../styles/Styles";
import { Fade } from "react-reveal";


const Calendar = () => {
  return(
    <div className='comp-cont'>
    <Fade duration={2000} top>
      <TitleCont>
        <Title>Tour Dates</Title>
      </TitleCont>
    </Fade>
    </div>
  )
}

export default Calendar;
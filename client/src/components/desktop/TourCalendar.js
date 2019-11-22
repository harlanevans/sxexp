// import { Title, TitleCont, TextCont, Text } from "../styles/Styles";
// import { Fade } from "react-reveal";
// import Hat from '../../assets/images/Hat.jpg';
// import Footer from './Footer';


// const Calendar = () => {
  //   return(
//     <div>

//     <div className='comp-cont-small'>
//     <Fade duration={2000} top>
//       <TitleCont>
//         <Title>Tour Dates</Title>
//       </TitleCont>
//     </Fade>
//     <Fade duration={2000} delay={750}>
//     <div className='img-cont row'>
//     <img src={Hat} className='human-img' alt='adventure hat'/>
//     </div>
//     </Fade>
//     <TextCont>
//       <Text>
//         Tour Dates Coming Soon!
//       </Text>
//     </TextCont>
//     </div>
//     <Footer />
//     </div>
//   )
// }

// export default Calendar;


import React, { useState, useEffect } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import axios from 'axios'
// Orignal File imprts
import { Title, TitleCont, TextCont, Text } from "../styles/Styles";
import { Fade } from "react-reveal";
import Hat from '../../assets/images/Hat.jpg';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: "8rem",
  },
  calendar: {
    minHeight: "60rem",
    color: 'blue'
  }
}));

const TourCalendar = props => {
  const classes = useStyles();

  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`/api/events`)
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(`Could Not Get Events: ${err.message}`));
  }, []);

  const testFunc = () => {
    console.log(events)
  }

  return (
    <div style={{ paddingTop: "0em" }}>
      {testFunc()}
      <Paper className={classes.paper} >
      <Fade duration={2000} top>
        <TitleCont>
          <Title>LDS Interest Trips</Title>
        </TitleCont>
      </Fade>
        <Calendar
          className={classes.calendar}
          selectable
          localizer={localizer}
          views={{ month: true }}
          events={events}
          startAccessor='start_date'
          endAccessor='end_date'
          titleAccessor="location"
          defaultView="month"
          showMultiDayTimes
          eventPropGetter={(event, start, end, isSelected) => {
            let newStyle = {
              backgroundColor: "#6E323A",
              color: 'white',
              borderRadius: "0px",
              border: "none",
              fontFamily: '"Amiri", serif',
              fontSize: '1.25em',
              padding: '.5em',
              letterSpacing: '3px',
      
                  };
      
            return {
              className: "",
              style: newStyle
            };
          }}
        />
      </Paper>
      <Footer />
    </div>
  );
};

export default TourCalendar;
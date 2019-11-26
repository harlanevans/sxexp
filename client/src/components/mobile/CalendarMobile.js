// import React from "react";
// import { Title, Text, TitleCont, TextCont } from "../styles/MobStyles";
// import { Fade } from "react-reveal";
// import Footer from "./FooterMob";


// const CalendarMobile = () => {
  //   return (
    //     <div>
    //       <div
//         className="new-comp-pad"
//         style={{ paddingTop: "35%", paddingBottom: "15%" }}
//       >
//         <Fade>
//           <TitleCont>
//             <Title>Tour Dates</Title>
//           </TitleCont>
//         </Fade>
//         <div className="page-img-cont">
//           <img src={Image} className="page-img" alt="adventure hat" />
//         </div>
//         <Fade>
//           <TextCont style={{ paddingTop: "2em" }}>
//             <Text>Tour dates coming soon!</Text>
//           </TextCont>
//         </Fade>
//       </div>
//       <Footer />
//     </div>
//   );
// };



import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import axios from 'axios'
// Orignal File imprts
// import { Title, TitleCont, TextCont, Text } from "../styles/Styles";
import { Title, Text, TitleCont, TextCont } from "../styles/MobStyles";

import { Fade } from "react-reveal";
import Image from "../../assets/images/Hat.jpg";
// import Hat from '../../assets/images/Hat.jpg';
import Footer from './FooterMob';
import "../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: "1rem",
  },
  calendar: {
    minHeight: "30rem",
  }
}));

const CalendarMobile = props => {
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
    <div>

    <div
        className="new-comp-pad"
        style={{ paddingTop: "25%", paddingBottom: "15%" }}
      >
    {/* <div style={{ paddingTop: "0em" }}> */}
      {testFunc()}
      <Fade>

      <Paper className={classes.paper} >
        <Fade duration={2000} top>
          <TitleCont style={{ padding: "1em 0em 1em" }}>
            <Title>LDS Interest Trips</Title>
          </TitleCont>
        </Fade>
         <div className="page-img-cont">
           <img src={Image} className="page-img" alt="adventure hat" />
         </div>
         <Fade>
           <TextCont style={{ paddingTop: "1em" }}>
             <Text>Tour dates coming soon!</Text>
           </TextCont>
         </Fade>
         <Fade duration={2000} delay={500}>
        <Calendar
          className={classes.calendar}
          selectable
          localizer={localizer}
          views={{ month: true, }}
          events={events}
          startAccessor='start_date'
          endAccessor='end_date'
          titleAccessor="location"
          defaultView="month"
          showMultiDayTimes
          // eventPropGetter={(event, start, end, isSelected) => {
            //   let newStyle = {
              //     backgroundColor: "black",
              //     color: 'black',
              //     borderRadius: "0px",
              //     border: "none",
              //     fontFamily: '"Amiri", serif',
              //     fontSize: '1.25em',
              //     padding: '.5em',
              //     letterSpacing: '3px',
              
              //         };
              
        //   return {
          //     className: "",
        //     style: newStyle
        //   };
        // }}
        />
        </Fade>
      </Paper>
        </Fade>
    </div>
      <Footer />
        </div>
  );
};
export default CalendarMobile;

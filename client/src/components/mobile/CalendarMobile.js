import React from "react";
import { Title, Text, TitleCont, TextCont } from "../styles/MobStyles";
import { Fade } from "react-reveal";
import Footer from "./FooterMob";
import Hat from "../../assets/images/Hat.jpg";
import JulyPDF from '../../assets/pdfs/GenHuSCEXPJuly2021.pdf'
import AugPDF from '../../assets/pdfs/SCEXPLDSinglesPeruapp-Aug2021.pdf'
import OctPDF from '../../assets/pdfs/GenHuMoonsRareBooksPeruOct2021.pdf'
import DecPDF from "../../assets/pdfs/SCEXPLDSInterestPeruDec2021.pdf";

const CalendarMobile = () => {
  return (
    <div>
      <div
        className="new-comp-pad"
        style={{ paddingTop: "35%", paddingBottom: "15%" }}
      >
        <Fade>
          <TitleCont>
            <Title>Tour Dates</Title>
          </TitleCont>
        </Fade>
        {/* <div className="page-img-cont">
          <img src={Hat} className="page-img" alt="adventure hat" />
        </div> */}
        <Fade>
          <TextCont style={{ paddingTop: "2em" }}>
            <Text>
              Join us in 2021 for a custom, luxurious, and expert-led LDS tour.
              Except for the LDS Single’s Tour, these tours are limited to 24
              persons and include superior trains and boats as well as four- and
              five-star hotels. Your health and safety at these altitudes and
              regions always come first. For 20 years, Southern Cross
              Expeditions has given LDS members an unforgettable, and even
              spiritual, tour throughout Peru. This LDS Interest tour is not
              available anywhere else. Come with us along the Holy Path journey
              of the bearded white god Wiraqocha.
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
          </div>
        </Fade>

        <Fade duration={2000}>
          <div style={style.listCont}>
            <Text style={style.list}>
              <Text style={style.subtitle}>Open Dates</Text>
              <ul>
                <div style={{ padding: ".5em 0" }}>
                  <li>July 10 - 18, 2021</li>
                  <a
                    href={JulyPDF}
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{
                      fontSize: ".75em",
                      color: "blue",
                    }}
                  >
                    Download the application here to learn more.
                  </a>
                </div>
                <div style={{ padding: ".5em 0" }}>
                  <li>
                    August 7 - 15, 2021{" "}
                    <span style={{ fontSize: ".75em", lineHeight: "1.5em" }}>
                      (LDS Singles Tour)
                    </span>
                  </li>
                  <a
                    href={AugPDF}
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{
                      fontSize: ".75em",
                      color: "blue",
                    }}
                  >
                    Download the application here to learn more.
                  </a>
                </div>
                <div style={{ padding: ".5em 0" }}>
                  <li style={{ padding: "0", margin: "0", height: "1.5em" }}>
                    October 9 - 17, 2021
                  </li>
                  <a
                    href={OctPDF}
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{
                      fontSize: ".75em",
                      color: "blue",
                    }}
                  >
                    Download the application here to learn more.
                  </a>
                  <div style={{ fontSize: ".75em", lineHeight: "1.5em" }}>
                    (in conjunction with Moon's Rare Books and Generations
                    Humanitarian)
                  </div>
                </div>
                <div style={{ padding: ".5em 0" }}>
                  <li style={{ padding: "0", margin: "0", height: "1.5em" }}>
                    December 27, 2021 - January 4, 2022
                  </li>
                  <a
                    href={DecPDF}
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{
                      fontSize: ".75em",
                      color: "blue",
                    }}
                  >
                    Download the application here to learn more.
                  </a>
                </div>
              </ul>
            </Text>
          </div>
        </Fade>
        <Fade duration={2000}>
          <div style={style.listCont}>
            <Text style={style.list}>
              <Text style={style.subtitle}>Tour costs: $3180</Text>
              <TextCont>
                <Text style={style.listText}>
                  (plus all airfare (US city to Lima RT and Peru domestic
                  airfare). Price based on double occupancy. Includes a $500
                  non-refundable deposit if you cancel for any reason. Please
                  sign up no later than 90 days prior to departure. Those
                  choosing single occupancy will pay an additional $500 for
                  Lima, Cusco, and other hotels. Includes: travel insurance, 4-5
                  star hotels, bus, boat, tours, ruins entrances, breakfast,
                  some lunches, Machu Picchu tour/train. Does not include: some
                  lunches and all dinners, personal taxi rides, souvenirs, tips,
                  incidentals. Itinerary subject to change based on airline
                  schedules. Payment in full deadline for tour: 90 days prior to
                  departure.
                </Text>
              </TextCont>
            </Text>
          </div>
          <div style={style.listCont}>
            <TextCont>
              <Text>We also do custom family tours of 10 or more persons.</Text>
            </TextCont>
          </div>
          <div style={style.listCont}>
            <TextCont>
              <Text>
                <a
                  href="mailto: van@genhu.org"
                  style={{ textDecoration: "underline" }}
                >
                  Email us about trip availability.
                </a>
              </Text>
            </TextCont>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
};
export default CalendarMobile;

const style = {
  listCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: "0em 1em"
  },
  list: {
    textAlign: "left",
    padding: "0em 2em",
    width: "100vw",
  },
  subtitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: "1.5em",
    border: "solid 1px gray",
    boxShadow: "0 1px 2px gray",
    padding: "0em 1em",
    borderRadius: "3px",
    fontFamily: "'Amiri', serif",
  },
  listText: {
    width: "110vw",
    padding: "0"
  }
};

// import React, { useState, useEffect } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import { makeStyles } from "@material-ui/core/styles";
// import { Paper } from "@material-ui/core";
// import axios from 'axios'
// // Orignal File imprts
// // import { Title, TitleCont, TextCont, Text } from "../styles/Styles";
// import { Title, Text, TitleCont, TextCont } from "../styles/MobStyles";

// import { Fade } from "react-reveal";
// import Image from "../../assets/images/Hat.jpg";
// // import Hat from '../../assets/images/Hat.jpg';
// import Footer from './FooterMob';
// import "../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css"

// const useStyles = makeStyles(theme => ({
//   paper: {
//     padding: "1rem",
//   },
//   calendar: {
//     minHeight: "30rem",
//   }
// }));

// const CalendarMobile = props => {
//   const classes = useStyles();

//   const localizer = momentLocalizer(moment);
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     axios.get(`/api/events`)
//       .then((res) => setEvents(res.data))
//       .catch((err) => console.log(`Could Not Get Events: ${err.message}`));
//   }, []);

//   const testFunc = () => {
//     console.log(events)
//   }

//   return (
//     <div>

//     <div
//         className="new-comp-pad"
//         style={{ paddingTop: "25%", paddingBottom: "15%" }}
//       >
//     {/* <div style={{ paddingTop: "0em" }}> */}
//       {testFunc()}
//       <Fade>

//       <Paper className={classes.paper} >
//         <Fade duration={2000} top>
//           <TitleCont style={{ padding: "1em 0em 1em" }}>
//             <Title>LDS Interest Trips</Title>
//           </TitleCont>
//         </Fade>
//          <div className="page-img-cont">
//            <img src={Image} className="page-img" alt="adventure hat" />
//          </div>
//          <Fade>
//            <TextCont style={{ paddingTop: "1em" }}>
//              <Text>Tour dates coming soon!</Text>
//            </TextCont>
//          </Fade>
//          <Fade duration={2000} delay={500}>
//         <Calendar
//           className={classes.calendar}
//           selectable
//           localizer={localizer}
//           views={{ month: true, }}
//           events={events}
//           startAccessor='start_date'
//           endAccessor='end_date'
//           titleAccessor="location"
//           defaultView="month"
//           showMultiDayTimes
//           // eventPropGetter={(event, start, end, isSelected) => {
//             //   let newStyle = {
//               //     backgroundColor: "black",
//               //     color: 'black',
//               //     borderRadius: "0px",
//               //     border: "none",
//               //     fontFamily: '"Amiri", serif',
//               //     fontSize: '1.25em',
//               //     padding: '.5em',
//               //     letterSpacing: '3px',

//               //         };

//         //   return {
//           //     className: "",
//         //     style: newStyle
//         //   };
//         // }}
//         />
//         </Fade>
//       </Paper>
//         </Fade>
//     </div>
//       <Footer />
//         </div>
//   );
// };
// export default CalendarMobile;

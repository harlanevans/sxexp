import React from "react";
import "../../styles/Mobile.css";

import Page from "../pages/Page";
import BookMob from "./BookMob";
import Footer from "../FooterMob";
import Quote from "./QuoteMob";
import Trips from "./TripsLMob";
import Testimonials from "./TestimonialsMob";
const LandingMob = () => {
  return (
    <div>
      <Page />
      <BookMob />
      <Quote />
      <Trips />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingMob;

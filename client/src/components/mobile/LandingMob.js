import React from 'react';
import '../styles/Mobile.css'

import Page from '../pages/Page';
import BookMob from './BookMob';
import Footer from '../FooterMob';
import Quote from './landing/QuoteMob';
import Trips from './landing/TripsLMob';
import Testimonials from './landing/TestimonialsMob';
const LandingMob = () => {
  return(
    <div>
      <Page />
      <BookMob />
      <Quote />
      <Trips />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default LandingMob;
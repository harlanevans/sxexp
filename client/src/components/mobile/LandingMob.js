import React from 'react';
import '../styles/Mobile.css'

import Page from './pages/Page';
import BookMob from './landing/BookMob';
import Footer from './FooterMob';
import Quote from './landing/QuoteMob';
import Trips from './landing/TripsLMob';
import Testimonials from './landing/TestimonialsMob';
import ScrollToTop from '../../ScrollToTop';

const LandingMob = () => {
  return(
      <ScrollToTop>
    <div id='home'>
      <Page />
    </div>
      <BookMob />
      <Quote />
      <Trips />
      <Testimonials />
      <Footer />
      </ScrollToTop>
  )
}

export default LandingMob;
import React from 'react';
import ScrollToTop from '../../../ScrollToTop';

import Carousel from './CarouselMain';
import BookLanding from './BookLanding'
import TripsLanding from './TripsLanding';
import Testimonials from './Testimonials';
import Quote from './Quote';
import Footer from '../Footer';

import { Fade } from "react-reveal";

const LandingPage = () => {
  return(
    <ScrollToTop>
      <Fade>
      <Carousel />
      </Fade>
      <BookLanding />
      <Fade>
      <Quote />
      </Fade>
      <TripsLanding />
      <Testimonials />
      <Footer />
    </ScrollToTop>
  )
}

export default LandingPage;
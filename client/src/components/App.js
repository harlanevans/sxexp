import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

// ? ------ Desktop Imports
import Nav from "./desktop/Nav";

import LandingPage from "./desktop/landing/LandingPage";
import Human from "./desktop/Human";
import Contact from "./desktop/Contact";

// import Book from "./desktop/Book";
// import TourCalendar from "./desktop/TourCalendar";
import NewBook from './desktop/NewBook';
import About from "./desktop/About";
import TourDates from "./desktop/TourDates";
import NoMatch from "./desktop/NoMatch";

// ! NAV IMPORTS
import NavMobile from "./mobile/NavMobile";
import Modal from "./mobile/Modal";

import LandingMob from "./mobile/LandingMob";
// import BookOrderMob from "./mobile/BookOrderMob";
import NewBookMob from './mobile/NewBookMob';
import GalleryMob from './mobile/GalleryMob';
import HumanMobile from "./mobile/HumanMobile";
import ContactMobile from "./mobile/ContactMobile";
import AboutMobile from "./mobile/AboutMobile";
import CalendarMobile from "./mobile/CalendarMobile";
import NoMatchMobile from "./mobile/NoMatchMobile";

class App extends React.Component {
  state = { pageLoaded: false, width: window.innerWidth, showModal: false };

  toggleModal = () => {
    // const { showModal } = this.state;
    this.setState({ showModal: !this.state.showModal });
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.handleWindowSizeChange);
  };

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 600;
    // the rest is the same...
    if (isMobile) {
      return (
        <>
          <NavMobile toggleModal={this.toggleModal} />
          <Modal
            toggleModal={this.toggleModal}
            showModal={this.state.showModal}
          />
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={LandingMob} />
              <Route exact path="/tour-dates" component={CalendarMobile} />
              {/* <Route exact path="/book" component={BookOrderMob} /> */}
              <Route exact path="/book" component={NewBookMob} />
              <Route exact path="/gallery" component={GalleryMob} />
              <Route exact path="/contact-us" component={ContactMobile} />
              <Route exact path="/about-us" component={AboutMobile} />
              <Route exact path="/humanitarian-work" component={HumanMobile} />
              <Route component={NoMatchMobile} />
            </Switch>
          </ScrollToTop>
        </>
      );
    } else {
      return (
        <>
          <Nav />
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/tour-dates" component={TourDates} />
              {/* <Route exact path="/tour-dates" component={TourCalendar} /> */}
              {/* <Route exact path="/book" component={Book} /> */}
              <Route exact path="/book" component={NewBook} />
              <Route exact path="/contact-us" component={Contact} />
              <Route exact path="/about-us" component={About} />
              <Route exact path="/humanitarian-work" component={Human} />
              <Route component={NoMatch} />
            </Switch>
          </ScrollToTop>
        </>
      );
    }
  }
}

export default App;

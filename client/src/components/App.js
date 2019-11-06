import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from '../ScrollToTop';

// ? ------ Desktop Imports
import Nav from "./desktop/Nav";

import LandingPage from "./desktop/LandingPage";
import Human from "./desktop/Human";
import Contact from "./desktop/Contact";
import Book from "./desktop/Book";
import About from "./desktop/About";
import Calendar from "./desktop/Calendar";
import NoMatch from "./desktop/NoMatch";

// ! NAV IMPORTS
// import NavMobile from "./desktop/NavMobile";

// import LandingPageMobile from "./desktop/LandingPageMobile";
// import HumanMobile from "./desktop/HumanMobile";
// import ContactMobile from "./desktop/ContactMobile";
// import BookMobile from "./desktop/BookMobile";
// import AboutMobile from "./desktop/AboutMobile";
// import CalendarMobile from "./desktop/CalendarMobile";
// import NoMatchMobile from "./desktop/NoMatchMobile";

class App extends React.Component {
  state = { pageLoaded: false, width: window.innerWidth };

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
          {/* <NavMobile />
        <Switch>
          <Route exact path="/" component={LandingPageMobile} />
          <Route exact path="/tour-dates" component={CalendarMobile} />
          <Route exact path="/book" component={BookMobile} />
          <Route exact path="/contact-us" component={ContactMobile} />
          <Route exact path="/about-us" component={AboutMobile} />
          <Route exact path="/humanitarian-work" component={HumanMobile} />
          <Route component={NoMatchMobile} />
        </Switch> */}
        </>
      )
    } else {
      return (
        <>
          <Nav />
          <ScrollToTop>

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/tour-dates" component={Calendar} />
            <Route exact path="/book" component={Book} />
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

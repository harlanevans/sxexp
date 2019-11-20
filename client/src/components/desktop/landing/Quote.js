import React from "react";
import { Fade } from "react-reveal";
import { Carousel } from "react-bootstrap";
import { QuoteAuth, QuoteText, RedBackground } from "../../styles/Styles";
import "bootstrap/dist/css/bootstrap.min.css";

class Quote extends React.Component {
  render() {
    return (
      <RedBackground>
        <Carousel
          indicators={false}
          interval={5000}
          pauseOnHover={false}
          controls={false}
          fade
        >
          <Carousel.Item>
            <Fade delay={500} duration={2000}>
              <div className="quote-text">
                <div className="col">
                  <div className="row padding">
                    <QuoteText>
                      <span>&#8216;</span>Man cannot discover new oceans unless
                      he has the courage to lose sight of the shore.
                      <span>&#8217;</span>{" "}
                    </QuoteText>
                  </div>
                  <div className="row">
                    <QuoteAuth>- Andre Gide</QuoteAuth>
                  </div>
                </div>
              </div>
            </Fade>
          </Carousel.Item>
          <Carousel.Item>
            <Fade delay={500} duration={2000}>
              <div className="quote-text">
                <div className="col">
                  <div className="row padding">
                    <QuoteText>
                      <span>&#8216;</span>Travel makes one modest. You see what
                      a tiny place you occupy in the world.
                      <span>&#8217;</span>{" "}
                    </QuoteText>
                  </div>
                  <div className="row">
                    <QuoteAuth>- Gustav Flaubert</QuoteAuth>
                  </div>
                </div>
              </div>
            </Fade>
          </Carousel.Item>
          {/* <Carousel.Item>
            <Carousel.Caption>
              <QuoteText>
              Travel makes one modest. You see what a tiny place you occupy in
                the world.
                </QuoteText>
              <QuoteAuth>Gustav Flaubert</QuoteAuth>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </RedBackground>
    );
  }
}

export default Quote;

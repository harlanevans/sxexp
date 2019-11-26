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
                      <span className="quotations">&#34;</span>Man cannot
                      discover new oceans unless he has the courage to lose
                      sight of the shore.
                      <span className="quotations">&#34;;</span>{" "}
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
                      <span className="quotations">&#34;</span>Travel makes one
                      modest. You see what a tiny place you occupy in the world.
                      <span className="quotations">&#34;</span>{" "}
                    </QuoteText>
                  </div>
                  <div className="row">
                    <QuoteAuth>- Gustav Flaubert</QuoteAuth>
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
                      <span className="quotations">&#34;</span>The world is a
                      book and those who do not travel read only one page.
                      <span className="quotations">&#34;</span>{" "}
                    </QuoteText>
                  </div>
                  <div className="row">
                    <QuoteAuth>- St. Augustine</QuoteAuth>
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
                      <span className="quotations">&#34;</span>A journey of a
                      thousand miles must begin with a single step.
                      <span className="quotations">&#34;</span>{" "}
                    </QuoteText>
                  </div>
                  <div className="row">
                    <QuoteAuth>- Lao Tzu</QuoteAuth>
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
                      <span className="quotations">&#34;</span>Not all those who
                      wander are lost.
                      <span className="quotations">&#34;</span>{" "}
                    </QuoteText>
                  </div>
                  <div className="row">
                    <QuoteAuth>- J. R. R. Tolkien</QuoteAuth>
                  </div>
                </div>
              </div>
            </Fade>
          </Carousel.Item>
        </Carousel>
      </RedBackground>
    );
  }
}

export default Quote;

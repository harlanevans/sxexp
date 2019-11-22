import React from "react";
import { Fade } from 'react-reveal'
import { Carousel } from "react-bootstrap";
import { QuoteAuth, QuoteText, RedBackground } from "../../styles/MobStyles";
import "bootstrap/dist/css/bootstrap.min.css";

class QuoteMob extends React.Component {
  render() {
    return (
      <RedBackground style={{ boxShadow: "0 4px 2px -2px gray" }}>
        <Carousel
          indicators={false}
          interval={5000}
          pauseOnHover={false}
          controls={false}
          fade
        >
          <Carousel.Item>
            <Fade delay={500} duration={2000}>
              <div className="quote-text-mob">
                <div className="row-mob">
                  <QuoteText>
                    <span style={{ color: "white", padding: "0px 5px" }}>
                      &#34;
                    </span>
                    Man cannot discover new oceans unless he has the courage to
                    lose sight of the shore.
                    <span style={{ color: "white", padding: "0px 5px" }}>
                      &#34;
                    </span>{" "}
                  </QuoteText>
                </div>
                <div className="row-mob">
                  <QuoteAuth>- Andre Gide</QuoteAuth>
                </div>
              </div>
            </Fade>
          </Carousel.Item>
          <Carousel.Item>
            <Fade delay={500} duration={2000}>
              <div className="quote-text-mob">
                <div className="row-mob">
                  <QuoteText>
                    <span style={{ color: "white", padding: "0px 5px" }}>
                      &#34;
                    </span>
                    Travel makes one modest. You see what a tiny place you
                    occupy in the world.
                    <span style={{ color: "white", padding: "0px 5px" }}>
                      &#34;
                    </span>{" "}
                  </QuoteText>
                </div>
                <div className="row-mob">
                  <QuoteAuth>- Gustav Flaubert</QuoteAuth>
                </div>
              </div>
            </Fade>
          </Carousel.Item>
          <Carousel.Item>
            <Fade delay={500} duration={2000}>
              <div className="quote-text-mob">
                <div className="row-mob">
                  <QuoteText>
                    <span style={{ color: "white", padding: "0px 5px" }}>
                      &#34;
                    </span>
                    The world is a book and those who do not travel read only
                    one page.
                    <span style={{ color: "white", padding: "0px 5px" }}>
                      &#34;
                    </span>{" "}
                  </QuoteText>
                </div>
                <div className="row-mob">
                  <QuoteAuth>- St. Augustine</QuoteAuth>
                </div>
              </div>
            </Fade>
          </Carousel.Item>
          <Carousel.Item>
            <Fade delay={500} duration={2000}>
              <div className="quote-text-mob">
                <div className="row-mob">
                  <QuoteText>
                    <span style={{ color: "white", padding: "0px 5px" }}>
                      &#34;
                    </span>
                    A journey of a thousand miles must begin with a single step.
                    <span style={{ color: "white", padding: "0px 5px" }}>
                      &#34;
                    </span>{" "}
                  </QuoteText>
                </div>
                <div className="row-mob">
                  <QuoteAuth>- Lao Tzu</QuoteAuth>
                </div>
              </div>
            </Fade>
          </Carousel.Item>
          <Carousel.Item>
            <Fade delay={500} duration={2000}>
              <div className="quote-text-mob">
                <div className="row-mob">
                  <QuoteText>
                    <span style={{ color: "white", padding: "0px 5px" }}>
                      &#34;
                    </span>
                    Not all those who wander are lost.
                    <span style={{ color: "white", padding: "0px 5px" }}>
                      &#34;
                    </span>{" "}
                  </QuoteText>
                </div>
                <div className="row-mob">
                  <QuoteAuth>- J. R. R. Tolkein</QuoteAuth>
                </div>
              </div>
            </Fade>
          </Carousel.Item>
        </Carousel>
      </RedBackground>
    );
  }
}

export default QuoteMob;

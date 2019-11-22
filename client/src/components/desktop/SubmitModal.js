import React from "react";
import { ModalText, ModalButton } from "../styles/Styles";
import { Fade, Slide } from "react-reveal";
import "./Modal.css";

const SubmitModal = ({ formSubmitted, toggleModal }) => {
  return (
    <div>
      {formSubmitted ? (
        <Fade>
          <div className="modal-cont">
            <Slide top delay={250} duration={1500}>
              <div className="modal-col">
                <div className="modal-row">
                  <ModalText>
                    Thank you! We will be in contact with you shortly.
                  </ModalText>
                </div>
                <div className="modal-row">
                  <ModalButton onClick={toggleModal}>Close</ModalButton>
                </div>
              </div>
            </Slide>
          </div>
        </Fade>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SubmitModal;

// const styles = {
//   mainCont: {
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     heigth: "100%",
//     width: "100%",
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//     backgroundRepeat: "none",
//     top: "0",
//     left: "0",
//     zIndex: "1000",
//     overflow: "auto",
//     display: "none",
//     position: "fixed"
//   }
// };

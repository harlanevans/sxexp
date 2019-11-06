import React from "react";
import { Fade } from "react-reveal";

import { Title, TitleCont } from "../styles/Styles";

const Book = () => {
  return (
    <div className='comp-cont'>
    <Fade duration={2000} top>
      <TitleCont>
        <Title>Book</Title>
      </TitleCont>
    </Fade>
    </div>
  );
};

export default Book;

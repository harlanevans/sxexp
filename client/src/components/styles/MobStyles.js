import styled from "styled-components";

/* font-family: 'Amiri', serif; */
/* font-family: 'Lato', sans-serif; */

export const Title = styled.h3`
  font-family: "Amiri", serif;
  font-size: 2em;
  color: black;
`;
export const TitleWhite = styled.h3`
  font-family: "Amiri", serif;
  font-size: 2em;
  color: white;
  text-shadow: 4px 2px 5px black;
`;

export const TitleCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  text-align: center;
  padding: 0em 1em;
`;

export const SubTitle = styled.h3`
  font-family: "Amiri", serif;
  font-size: 1.5em;
  color: black;
`;

export const Text = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1em;
  color: black;
  line-height: 2em;
`;
export const PictureText = styled.p`
  font-family: "Lato", sans-serif;
  font-size: .75em;
  color: black;
  line-height: 2em;
`;

export const TextWhite = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1em;
  color: white;
  line-height: 2em;
  text-shadow: 2px 1px 5px black;
`;

export const TextCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  text-align: center;
  padding: 0em 2em 1em;
`;

export const RedBackground = styled.div`
  background-color: #6e323a;
  height: 100%;
  padding: 0em 2em;
`;

export const TanBackground = styled.div`
  background-color: #b6a67d;
  height: 100%;
  padding: 4em 0em;
`;

export const Button = styled.button`
  font-family: "Amiri", serif;
  font-size: 1.25em;
  background-color: transparent;
  padding: 0.25em 2em;
  border-radius: 3px;
  border: solid 2px black;
  outline: 0;
  box-shadow: 0 0 1px 0px black;
`;

export const ButtonWhite = styled.button`
  font-family: "Amiri", serif;
  font-size: 1.25em;
  background-color: transparent;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: white;
  border: solid 2px white;
  outline: 0;
`;

export const ModalButton = styled.button`
  font-family: "Amiri", serif;
  font-size: 1.25em;
  background-color: white;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: black;
  border: solid 2px black;
  outline: 0;
  width: 10em;
`;

export const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 1em;
`;

export const ButtonContCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  padding: 1em;
`;

export const QuoteAuth = styled.h3`
  font-family: "Amiri", serif;
  text-decoration: italics;
  text-align: center;
  font-weight: 100;
  font-size: 1.25em;
  color: white;
  text-shadow: 1px 1px 5px black;
`;

export const QuoteText = styled.h4`
  font-family: "Lato", sans-serif;
  text-align: center;
  font-weight: 100;
  font-size: 1em;
  color: white;
  text-shadow: 1px 1px 5px black;
`;

export const ContactText = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1.25em;
  letter-spacing: 1px;
  padding: 0em;
  text-align: center;
  color: black;
`;

export const FooterTitle = styled.h5`
  font-family: "Amiri", serif;
  font-size: 0.75em;
  font-weight: 100;
  color: white;
  letter-spacing: 4px;
  padding: 1em;
`;
export const FooterText = styled.h5`
  font-family: "Lato", sans-serif;
  font-size: 0.75em;
  font-weight: 100;
  color: white;
  letter-spacing: 2px;
  padding: 0;
`;

export const FooterOpacity = styled.h5`
  font-family: "Lato", sans-serif;
  font-size: 0.75em;
  font-weight: 100;
  color: #7e7e7e;
  letter-spacing: 2px;
  padding: 1em;
`;

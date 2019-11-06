import styled from "styled-components";

/* font-family: 'Amiri', serif; */
/* font-family: 'Lato', sans-serif; */

export const NavItem = styled.div`
  font-family: "Amiri", serif;
  font-size: 1.25em;
  color: white;
  letter-spacing: 2px;
  font-weight: lighter;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const CTitle = styled.h1`
  font-family: "Amiri", serif;
  font-size: 5em;
  font-weight: lighter;
  color: white;
  letter-spacing: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-shadow: 4px 2px 5px black;
`;
export const CSubTitle = styled.h3`
  font-family: "Lato", sans-serif;
  font-size: 2em;
  font-weight: lighter;
  color: white;
  letter-spacing: 4px;
  text-shadow: 4px 2px 5px black;
`;

export const Title = styled.h3`
  font-family: "Amiri", serif;
  font-size: 5em;
  font-weight: lighter;
  letter-spacing: 4px;
  color: black;
`;
export const TitleWhite = styled.h3`
  font-family: "Amiri", serif;
  font-size: 5em;
  font-weight: lighter;
  letter-spacing: 4px;
  color: white;
  text-shadow: 4px 2px 5px black;
  `;
  
  export const TitleCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 5%;
  height: 100%;
  `;
  
  export const Text = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1.25em;
  letter-spacing: 1px;
  line-height: 2em;
  padding: 1em;
  text-align: center;
  color: black;
`;
export const TextWhite = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1.25em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  color: white;
  text-shadow: 2px 1px 5px black;
  padding-top: 1em;
`;

export const TextCont = styled.div`
  padding: 1em 10em;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.button`
  font-family: "Amiri", serif;
  font-size: 1.25em;
  background-color: transparent;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: solid 2px black;
`;
export const ButtonWhite = styled.button`
  font-family: "Amiri", serif;
  font-size: 1.25em;
  background-color: white;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: black;
  border: solid 2px black;
`;

export const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 1em;
`;

export const RedBackground = styled.div`
  background-color: #6e323a;
  height: 100%;
`;

export const TanBackground = styled.div`
  background-color: #b6a67d;
  height: 100%;
`;

export const QuoteAuth = styled.h3`
  font-family: "Amiri", serif;
  text-decoration: italics;
  text-align: center;
  font-weight: 100;
  font-size: 2em;
  letter-spacing: 4px;
  color: white;
  text-shadow: 4px 2px 5px black;
`;

export const QuoteText = styled.h4`
  font-family: "Lato", sans-serif;
  text-align: center;
  font-weight: 100;
  letter-spacing: 4px;
  font-size: 2em;
  color: white;
  text-shadow: 4px 2px 5px black;
`;

export const FooterTitle = styled.h5`
  font-family: "Amiri", serif;
  font-size: 1em;
  font-weight: 100;
  color: white;
  letter-spacing: 4px;
  padding: 1em;
`;
export const FooterText = styled.h5`
  font-family: "Lato", sans-serif;
  font-size: 1em;
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

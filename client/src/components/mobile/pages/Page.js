import React from "react";

import Welcome from './Welcome';
import Christ from './Christ';
import MeetPeople from './MeetPeople';
import Ruins from './Ruins';
import ScrollToTop from "../../../ScrollToTop";



const Page = () => {
  return (
    <div style={{paddingTop: '25%'}}>
    <ScrollToTop>
      <Welcome />
    </ScrollToTop>
      <Christ />
      <MeetPeople />
      <Ruins />
    </div>
  );
};

export default Page;

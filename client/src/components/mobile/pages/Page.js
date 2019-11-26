import React from "react";

import Welcome from './Welcome';
import Women from './Women';
import Lizard from './Lizard';
import Prayer from './Prayer';
import ScrollToTop from "../../../ScrollToTop";



const Page = () => {
  return (
    <div style={{paddingTop: '25%'}}>
    <ScrollToTop>
      <Welcome />
      <Women />
      {/* <Lizard /> */}
      <Prayer />
    </ScrollToTop>
    </div>
  );
};

export default Page;

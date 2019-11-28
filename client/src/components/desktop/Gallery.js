import React from "react";
import {
  // Title,
  // TitleCont,
  // TextCont,
  // Text,
  PictureText,
  // ButtonCont,
  // Button
} from "../styles/Styles";
import { Fade } from "react-reveal";

//! IMAGES IMPORTS

import CrabMan from "../../assets/book_images/03CrabMan.png";
import IncaEmpireMapwithtitle from "../../assets/book_images/04IncaEmpireMapwithtitle.jpeg";
import SacredVestments from "../../assets/book_images/10SacredVestments.png";

import church from "../../assets/book_images/11church3Bishopric.jpeg";
import Mochica from "../../assets/book_images/12Mochica.jpg";
import Mitre from "../../assets/book_images/13MITRE ML001958a.jpg";

import ML from "../../assets/book_images/14ML005523a.jpg";
import FourpointHat from "../../assets/book_images/15fourpointhat.png";
import CrossedX from "../../assets/book_images/16CrossedXandChakanainmiddleTiwanaku.png";

import Tocapus from "../../assets/book_images/18Tocapus.png";
import Forrdham from "../../assets/book_images/20Forrdhamapron.jpeg";
import spiral from "../../assets/book_images/21girdlespiral.jpeg";

import Caral from "../../assets/book_images/24Caralcirclesquare.jpeg";
import CeramicSpiral from "../../assets/book_images/26ceramicspiral.jpg";
import ChanChan from "../../assets/book_images/27ChanChan.jpeg";

import Northwall from "../../assets/book_images/32NorthwallKalasasaya.jpeg";
import GateofSun from "../../assets/book_images/33Gateofthesun2.jpeg";
import Judah from "../../assets/book_images/36chasquiJudah.png";

import Condorman  from "../../assets/book_images/37condorman.png";
import JuancaShield from "../../assets/book_images/40JuancaShield.jpeg";
import Seerstone from "../../assets/book_images/41seerstone.jpeg";

import Yanantin from "../../assets/book_images/42OriginalYanantin.jpeg";
import Recintos from "../../assets/book_images/43Recintos.jpeg";
import Templeview from "../../assets/book_images/44Templeview.jpeg"; 

import Raqchi from "../../assets/book_images/45Raqchi.jpeg";
import Ayni from "../../assets/book_images/46firstsignofAyni.jpeg";
import Bookcover from "../../assets/book_images/47bookcover.jpeg";

import KutiSechin from "../../assets/book_images/48AKutiSechin.jpeg";
import Juti from "../../assets/book_images/48BLIGHTSignofJuti.jpeg";
import Kuti from "../../assets/book_images/49Kuti.jpg";

import YanantinSechin from "../../assets/book_images/50YanantinSechin.jpeg";
import Kotosh from "../../assets/book_images/54kotoshperu.jpg";
import Chancay from "../../assets/book_images/55ChancayWHITEML031100a.jpg";

import CrossSechin from "../../assets/book_images/56better_CROSS-Sechin.jpg";
import CrossedArms from "../../assets/book_images/56CrossedarmsSechin.jpeg";
import Challapata from "../../assets/book_images/57challapata.png";

import WhiteA from "../../assets/book_images/58AWHITEML005558a.jpg";
import WhiteB from "../../assets/book_images/58BWHITEML000899a.jpg";
import WhiteC from "../../assets/book_images/58CWHITEML001086a.jpg";

import Champi from "../../assets/book_images/60champiartifactceremony.png";
import Chimu from "../../assets/book_images/61ChimuEmbraceML021159d.JPG";
import Penalty from "../../assets/book_images/62Penalty.jpeg";

import SentinelA from "../../assets/book_images/63ASentinels.jpeg";
import SentinalB from "../../assets/book_images/63BSentinel.jpeg";
import PrayerCircleBowl from "../../assets/book_images/64prayercirclebowl.jpeg";

import Huacade from "../../assets/book_images/65HuacadelaLuna.jpeg";
import Aorphic from "../../assets/book_images/66Aorphic.jpg";
import BetterStuff from "../../assets/book_images/67better.jpeg";

import Tiwanaka from "../../assets/book_images/68Tiwanakuprayercircle.jpeg";

const Gallery = () => {
  return (
    <div style={style.mainCont}>
      {/* ROW */}
      <Fade duration={2000} delay={500}>
        <div style={style.row}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={CrabMan} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 03.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={IncaEmpireMapwithtitle} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 04.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={SacredVestments} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 10.</PictureText>
          </div>
        </div>
      </Fade>
      {/* ROW */}
      <Fade duration={2000} delay={500}>
        <div style={style.row}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={church} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 11.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Mochica} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 12.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Mitre} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 13.</PictureText>
          </div>
        </div>
      </Fade>
      {/* ROW */}
      <Fade duration={2000} delay={500}>
        <div style={style.row}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={ML} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 14.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={FourpointHat} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 15.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={CrossedX} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 16.</PictureText>
          </div>
        </div>
      </Fade>
      {/* ROW */}
      <Fade duration={2000} delay={500}>
        <div style={style.row}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Tocapus} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 18.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Forrdham} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 20.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={spiral} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 21.</PictureText>
          </div>
        </div>
      </Fade>
      {/* ROW */}
      <Fade duration={2000} delay={500}>
        <div style={style.row}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Caral} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 24.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={CeramicSpiral} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 26.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={ChanChan} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 27.</PictureText>
          </div>
        </div>
      </Fade>
      {/* ROW */}
      <Fade duration={2000} delay={500}>
        <div style={style.row}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Northwall} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 32.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={GateofSun} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 33.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Judah} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 36.</PictureText>
          </div>
        </div>
      </Fade>
      {/* ROW */}
      <Fade duration={2000} delay={500}>
        <div style={style.row}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Condorman} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 37.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={JuancaShield} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 40.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Seerstone} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 41.</PictureText>
          </div>
        </div>
      </Fade>
      {/* ROW */}
      <Fade duration={2000} delay={500}>
        <div style={style.row}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Yanantin} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 42.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Recintos} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 43.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Templeview} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 44.</PictureText>
          </div>
        </div>
      </Fade>
      {/* ROW */}
      <Fade duration={2000} delay={500}>
        <div style={style.row}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Raqchi} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 45.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Ayni} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 46.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Bookcover} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 47.</PictureText>
          </div>
        </div>
      </Fade>
      {/* ROW */}
      <Fade duration={2000} delay={500}>
        <div style={style.row}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={KutiSechin} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 48.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Juti} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 48.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Kuti} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 49.</PictureText>
          </div>
        </div>
      </Fade>
      {/* ROW */}
      <Fade duration={2000} delay={500}>
        <div style={style.row}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={YanantinSechin} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 50.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Kotosh} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 54.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Chancay} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 55.</PictureText>
          </div>
        </div>
      </Fade>
      {/* ROW */}
      <Fade duration={2000} delay={500}>
        <div style={style.row}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={CrossSechin} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 56.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={CrossedArms} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 57.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Challapata} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 57.</PictureText>
          </div>
        </div>
      </Fade>
      {/* ROW */}
      <Fade duration={2000} delay={500}>
        <div style={style.row}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={WhiteA} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 58.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={WhiteB} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 58.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={WhiteC} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 58.</PictureText>
          </div>
        </div>
      </Fade>
      {/* ROW */}
      <Fade duration={2000} delay={500}>
        <div style={style.row}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Champi} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 60.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Chimu} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 61.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Penalty} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 62.</PictureText>
          </div>
        </div>
      </Fade>
      {/* ROW */}
      <Fade duration={2000} delay={500}>
        <div style={style.row}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={SentinelA} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 63.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={SentinalB} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 63.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={PrayerCircleBowl} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 64.</PictureText>
          </div>
        </div>
      </Fade>
      {/* ROW */}
      <Fade duration={2000} delay={500}>
        <div style={style.row}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Huacade} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 65.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Aorphic} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 66.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={BetterStuff} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 67.</PictureText>
          </div>
        </div>
      </Fade>
      {/* ROW */}
      <Fade duration={2000} delay={500}>
        <div style={style.row}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img src={Tiwanaka} style={style.img} />
            </div>
            <PictureText style={style.picText}>Figure 68.</PictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
            </div>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
            </div>
          </div>
        </div>
      </Fade>
      {/* END */}
    </div>
  );
};

export default Gallery;

const style = {
  mainCont: {
    width: "100%",
    height: "100%"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  colThird: {
    flex: "33%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  imgCont: {
    padding: "1em",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  img: {
    width: "50%",
    height: "100%",
    borderRadius: "2px",
    boxShadow: "1px 1px 5px rgb(100, 100, 100)"
  },
  picText: {
    fontStyle: "italic",
    fontWeight: "100",
    padding: "0"
  }
};

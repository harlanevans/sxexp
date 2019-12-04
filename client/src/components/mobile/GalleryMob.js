import React from "react";
import {
  Title,
  TitleCont,
  // TextCont,
  Text,
  GalleryPictureText
  // ButtonCont,
  // Button
} from "../styles/MobStyles";
import { Fade } from "react-reveal";
import Footer from "./FooterMob";

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

import Condorman from "../../assets/book_images/37condorman.png";
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

const GalleryMob = () => {
  return (
    <div>
      <div
        className="new-comp-pad"
        style={{ paddingTop: "35%", paddingBottom: "15%" }}
      >
        <TitleCont>
          <Title>Images from The House of the Lord</Title>
        </TitleCont>
        <TitleCont>
          <Text>
            The following images are the color versions in the B&W book. The
            Figure numbers below match the figure in the book:
          </Text>
        </TitleCont>
        {/* ROW */}
        <Fade duration={2000}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={CrabMan} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 03.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img
                alt="gallery-img"
                src={IncaEmpireMapwithtitle}
                style={style.img}
              />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 04.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={SacredVestments} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 10.
            </GalleryPictureText>
          </div>
        </Fade>
        {/* ROW */}
        <Fade duration={2000}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={church} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 11.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Mochica} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 12.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Mitre} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 13.
            </GalleryPictureText>
          </div>
        </Fade>
        {/* ROW */}
        <Fade duration={2000}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={ML} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 14.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={FourpointHat} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 15.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={CrossedX} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 16.
            </GalleryPictureText>
          </div>
        </Fade>
        {/* ROW */}
        <Fade duration={2000}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Tocapus} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 18.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Forrdham} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 20.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={spiral} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 21.
            </GalleryPictureText>
          </div>
        </Fade>
        {/* ROW */}
        <Fade duration={2000}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Caral} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 24.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={CeramicSpiral} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 26.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={ChanChan} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 27.
            </GalleryPictureText>
          </div>
        </Fade>
        {/* ROW */}
        <Fade duration={2000}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Northwall} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 32.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={GateofSun} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 33.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Judah} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 36.
            </GalleryPictureText>
          </div>
        </Fade>
        {/* ROW */}
        <Fade duration={2000}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Condorman} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 37.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={JuancaShield} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 40.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Seerstone} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 41.
            </GalleryPictureText>
          </div>
        </Fade>
        {/* ROW */}
        <Fade duration={2000}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Yanantin} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 42.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Recintos} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 43.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Templeview} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 44.
            </GalleryPictureText>
          </div>
        </Fade>
        {/* ROW */}
        <Fade duration={2000}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Raqchi} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 45.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Ayni} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 46.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Bookcover} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 47.
            </GalleryPictureText>
          </div>
        </Fade>
        {/* ROW */}
        <Fade duration={2000}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={KutiSechin} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 48.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Juti} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 48.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Kuti} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 49.
            </GalleryPictureText>
          </div>
        </Fade>
        {/* ROW */}
        <Fade duration={2000}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={YanantinSechin} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 50.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Kotosh} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 54.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Chancay} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 55.
            </GalleryPictureText>
          </div>
        </Fade>
        {/* ROW */}
        <Fade duration={2000}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={CrossSechin} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 56.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={CrossedArms} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 57.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Challapata} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 57.
            </GalleryPictureText>
          </div>
        </Fade>
        {/* ROW */}
        <Fade duration={2000}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={WhiteA} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 58.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={WhiteB} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 58.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={WhiteC} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 58.
            </GalleryPictureText>
          </div>
        </Fade>
        {/* ROW */}
        <Fade duration={2000}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Champi} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 60.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Chimu} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 61.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Penalty} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 62.
            </GalleryPictureText>
          </div>
        </Fade>
        {/* ROW */}
        <Fade duration={2000}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={SentinelA} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 63.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={SentinalB} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 63.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={PrayerCircleBowl} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 64.
            </GalleryPictureText>
          </div>
        </Fade>
        {/* ROW */}
        <Fade duration={2000}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Huacade} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 65.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Aorphic} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 66.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={BetterStuff} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 67.
            </GalleryPictureText>
          </div>
        </Fade>
        {/* ROW */}
        <Fade duration={2000}>
          <div style={style.colThird}>
            <div style={style.imgCont}>
              <img alt="gallery-img" src={Tiwanaka} style={style.img} />
            </div>
            <GalleryPictureText style={style.picText}>
              Figure 68.
            </GalleryPictureText>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}></div>
          </div>
          <div style={style.colThird}>
            <div style={style.imgCont}></div>
          </div>
        </Fade>
        {/* END */}
      </div>
      <Footer />
    </div>
  );
};

export default GalleryMob;

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
    width: "90%",
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

import React from "react";
import { Title, TitleCont, Text, TextCont } from "../../styles/MobStyles";
import Machu from '../../../assets/images/MachuPichu.jpg';

const Welcome = () => {
  return (
    <div className="page-cont">
      <TitleCont>
        <Title>Welcome to Southern Cross Expeditions</Title>
      </TitleCont>
      <div className='page-img-cont'>
        <img src={Machu} className='page-img' />
      </div>
      <TextCont>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo,
          neque et dapibus vulputate, sapien metus sagittis leo, nec accumsan
          nibh mi nec mauris. Donec id neque eget justo accumsan dictum non
          tristique diam. Pellentesque ac imperdiet quam. Vestibulum arcu leo,
          elementum a mollis a, viverra eu eros.
        </Text>
      </TextCont>
    </div>
  );
};

export default Welcome;

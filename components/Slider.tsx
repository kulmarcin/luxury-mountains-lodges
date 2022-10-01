import React, { useState } from 'react';

import {
  ButtonLeft,
  SliderContainer,
  Image,
  ButtonRight,
  MainText,
  Description
} from '../styles/components/slider';

import sliderData from '../assets/sliderData';

export default function Slider() {
  const [index, setIndex] = useState(0);

  const indexUp = () => {
    setIndex(state => state + 1);
  };

  const indexDown = () => {
    setIndex(state => state - 1);
  };

  return (
    <>
      <MainText>Conservation. Our passion, our purpose.</MainText>
      <SliderContainer>
        {sliderData.map((el, idx) => (
          <Image
            key={el.id}
            src={el.image}
            alt={el.alt}
            index={index}
            style={{ marginLeft: idx === 0 ? 20 : 0 }}
          />
        ))}

        {index !== 0 && (
          <ButtonLeft size={35} color="black" onClick={indexDown} />
        )}
        {index !== 2 && (
          <ButtonRight size={35} color="black" onClick={indexUp} />
        )}
      </SliderContainer>

      <Description>{sliderData[index].description}</Description>
    </>
  );
}

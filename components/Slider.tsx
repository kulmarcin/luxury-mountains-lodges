import React, { useState } from 'react';

import {
  ButtonLeft,
  SliderContainer,
  ImageContainer,
  ButtonRight,
  MainText,
  Description
} from '../styles/components/slider';

import sliderData from '../assets/sliderData';
import Image from 'next/image';

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
          <ImageContainer
            key={el.id}
            index={index}
            style={{ marginLeft: idx === 0 ? 20 : 0 }}
          >
            <Image
              src={el.image}
              alt={el.alt}
              width={900}
              height={500}
              objectFit="cover"
            />
          </ImageContainer>
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

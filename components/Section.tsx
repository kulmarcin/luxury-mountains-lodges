import React from 'react';

import {
  MainText,
  Description,
  Button,
  TextContainer,
  Image,
  ImageContainer
} from '../styles/components/section';

interface Props {
  mainText: string;
  description: string;
  image: string;
  align: string;
  isStory?: boolean;
}

export default function Section({
  mainText,
  description,
  image,
  align,
  isStory
}: Props) {
  return (
    <>
      <TextContainer>
        <MainText>{mainText}</MainText>
        <Description>{description}</Description>

        {isStory && <Button>Our Story</Button>}
      </TextContainer>

      <ImageContainer align={align}>
        <Image src={image} alt="section1 image" />
      </ImageContainer>
    </>
  );
}

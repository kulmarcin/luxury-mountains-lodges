import React from 'react';

import {
  MainText,
  Description,
  Button,
  TextContainer,
  Image,
  ImageContainer,
  Container
} from '../styles/components/section';

interface Props {
  mainText: string;
  description: string;
  image: string;
  align: string;
  isStory?: boolean;
  order: number;
}

export default function Section({
  mainText,
  description,
  image,
  align,
  isStory,
  order
}: Props) {
  return (
    <Container>
      <TextContainer>
        <MainText>{mainText}</MainText>
        <Description>{description}</Description>

        {isStory && <Button>Our Story</Button>}
      </TextContainer>

      <ImageContainer align={align} order={order}>
        <Image src={image} alt="section1 image" />
      </ImageContainer>
    </Container>
  );
}

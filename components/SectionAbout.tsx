import { NextRouter } from 'next/router';
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
  isButton: boolean;
  order: number;
  router: NextRouter
}

export default function SectionAbout({
  mainText,
  description,
  image,
  align,
  order,
  router,
  isButton
}: Props) {
  return (
    <Container>
      <TextContainer>
        <MainText>{mainText}</MainText>
        <Description>{description}</Description>

        {isButton && <Button onClick={() => router.push('/interior')}>Our Lodges</Button>}
      </TextContainer>

      <ImageContainer align={align} order={order}>
        <Image src={image} alt="section about image" />
      </ImageContainer>
    </Container>
  );
}

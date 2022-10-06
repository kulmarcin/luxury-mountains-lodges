import Image from 'next/image';
import { NextRouter } from 'next/router';
import React from 'react';

import {
  MainText,
  Description,
  Button,
  TextContainer,
  ImageAlignContainer,
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
  router: NextRouter;
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

        {isButton && (
          <Button onClick={() => router.push('/interior')}>Our Lodges</Button>
        )}
      </TextContainer>
      <ImageAlignContainer align={align} order={order}>
        <ImageContainer>
          <Image
            src={image}
            alt="section about image"
            width={750}
            height={750}
            objectFit="cover"
            objectPosition={'left'}
          />
        </ImageContainer>
      </ImageAlignContainer>
    </Container>
  );
}

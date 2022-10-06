import { NextRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';

import {
  MainText,
  Description,
  Button,
  TextContainer,
  ImageContainer,
  Container,
  ImageAlignContainer
} from '../styles/components/section';

interface Props {
  mainText: string;
  description: string;
  image: string;
  align: string;
  isStory?: boolean;
  order: number;
  router: NextRouter;
}

export default function Section({
  mainText,
  description,
  image,
  align,
  isStory,
  order,
  router
}: Props) {
  return (
    <Container>
      <TextContainer>
        <MainText>{mainText}</MainText>
        <Description>{description}</Description>

        {isStory && (
          <Button onClick={() => router.push('/about')}>Our Story</Button>
        )}
      </TextContainer>

      <ImageAlignContainer align={align} order={order}>
        <ImageContainer>
          <Image
            src={image}
            alt="section image"
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

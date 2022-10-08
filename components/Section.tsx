import { NextRouter } from 'next/router';
import React, { useEffect } from 'react';
import Image from 'next/image';

import {
  MainText,
  Description,
  Button,
  TextContainer,
  ImageContainer,
  Container,
  ImageAlignContainer,
  StickyContainer
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

function moveImage() {
  const images = document.querySelectorAll(
    '.sectionImage'
  ) as NodeListOf<HTMLImageElement>;

  images.forEach(el => {
    const elementPosition = el.getBoundingClientRect().top;

    if (elementPosition < 0 && elementPosition > -200) {
      el.style.transform = `translateY(${-elementPosition / 2}px)`;
    } else if (elementPosition < -200) {
      el.style.transform = `translateY(100px)`;
    }
  });
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
  useEffect(() => {
    window.addEventListener('scroll', moveImage);

    return () => {
      window.removeEventListener('scroll', moveImage);
    };
  }, []);

  return (
    <Container className='section'>
      <TextContainer>
        <StickyContainer>
          <MainText>{mainText}</MainText>
          <Description>{description}</Description>

          {isStory && (
            <Button onClick={() => router.push('/about')}>Our Story</Button>
          )}
        </StickyContainer>
      </TextContainer>

      <ImageAlignContainer align={align} order={order}>
        <ImageContainer>
          <Image
            className="sectionImage"
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

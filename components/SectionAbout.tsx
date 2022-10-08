import Image from 'next/image';
import { NextRouter } from 'next/router';
import React, { useEffect } from 'react';

import {
  MainText,
  Description,
  Button,
  TextContainer,
  ImageAlignContainer,
  ImageContainer,
  Container,
  StickyContainer
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

function moveImage() {
  const images = document.querySelectorAll(
    '.sectionAboutImage'
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

export default function SectionAbout({
  mainText,
  description,
  image,
  align,
  order,
  router,
  isButton
}: Props) {
  useEffect(() => {
    window.addEventListener('scroll', moveImage);

    return () => {
      window.removeEventListener('scroll', moveImage);
    };

  }, []);
  return (
    <Container className="section">
      <TextContainer>
        <StickyContainer>
          <MainText>{mainText}</MainText>
          <Description>{description}</Description>

          {isButton && (
            <Button onClick={() => router.push('/interior')}>Our Lodges</Button>
          )}
        </StickyContainer>
      </TextContainer>
      <ImageAlignContainer align={align} order={order}>
        <ImageContainer>
          <Image
            className="sectionAboutImage"
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

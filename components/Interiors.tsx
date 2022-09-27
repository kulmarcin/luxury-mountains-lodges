import React from 'react';

import {
  Container,
  Description,
  MainText,
  Image,
  ImageContainer,
  Location,
  Title,
  InteriorsContainer
} from '../styles/components/interiors';

import interiorsData from '../assets/interiorsData';

export default function Interiors() {
  return (
    <Container>
      <MainText>A soul-restoring experience. Find your sanctuary.</MainText>
      <Description>
        Featuring unfiltered space & time, award-winning lodges offer remote
        locations, complete privacy and intuitive service at every turn. Each
        unique setting allows guests to truly connect with nature, and
        experience most pristine wildlife & wilderness up close.
      </Description>

      <InteriorsContainer>
        {interiorsData.map(el => (
          <ImageContainer key={el.id}>
            <Image src={el.image} alt={el.alt} />
            <Location>{el.location}</Location>
            <Title>{el.title}</Title>
          </ImageContainer>
        ))}
      </InteriorsContainer>
    </Container>
  );
}

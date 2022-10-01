import React from 'react';
import styled from 'styled-components';
import devices from '../styles/mediaQuery';
import mixins from '../styles/mixins';
import theme from '../styles/theme';

const Container = styled.div`
  ${mixins.flexCenter}
  width: 100%;
  height: 100vh;
  font-size: ${theme.fontSizes.xs};

  @media ${devices.tablet} {
    font-size: ${theme.fontSizes.lg};
  }

`;

export default function Error() {
  // eslint-disable-next-line react/no-unescaped-entities
  return <Container>Oops! We couldn't find what you are looking for :(</Container>;
}

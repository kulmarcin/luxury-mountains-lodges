import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import mixins from '../styles/mixins';
import theme from '../styles/theme';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.beige};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5000;
  ${mixins.flexCenter};
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
`;

export default function Loader() {
  return (
    <Container>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
}

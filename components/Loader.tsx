import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import mixins from '../styles/mixins';
import theme from '../styles/theme';

interface Props {
  loading: boolean;
  timeoutSlide: boolean;
}

const Container = styled.div<Props>`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.beige};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5000;
  ${mixins.flexCenter};
  opacity: ${({ loading }) => (loading ? 1 : 0)};
  transform: ${({ timeoutSlide }) => timeoutSlide ? 'translateY(-1000px)' : 'translateY(0)'};
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
`;

export default function Loader({ loading }: { loading: boolean }) {
  const [timeoutSlide, setTimeoutSlide] = useState(false)

  useEffect(() => {
    if(loading) {
      setTimeout(() => {
        setTimeoutSlide(true)
      }, 3000)
    }

  }, [loading])
  return (
    <Container loading={loading} timeoutSlide={timeoutSlide}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
}

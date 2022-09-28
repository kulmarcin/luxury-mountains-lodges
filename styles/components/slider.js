import styled from 'styled-components';

import theme from '../theme';
import devices from '../mediaQuery';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export const SliderContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 20px;
  overflow: hidden;
  margin-left: auto;

  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media ${devices.tablet} {
    height: 500px;
  }

  @media ${devices.desktop} {
    padding-left: 100px;
  }

  @media ${devices.hugeDesktop} {
    padding-left: 250px;
  }
`;

export const MainText = styled.p`
  font-size: ${theme.fontSizes.lg};
  font-family: ${theme.fonts.light};
  margin-top: 50px;
  text-align: center;

  @media ${devices.tablet} {
    font-size: ${theme.fontSizes.xl};
  }
`;

export const Image = styled.img`
  min-width: 270px;
  height: 270px;
  border-radius: 25px;
  object-fit: cover;
  margin-right: 20px;

  transition: all 1s ease-in-out;
  transform: ${({ index }) => `translateX(-${index * 240}px)`};

  @media ${devices.tablet} {
    min-width: 500px;
    max-width: 500px;
    height: 500px;
    transform: ${({ index }) => `translateX(-${index * 380}px)`};
  }

  @media ${devices.desktop} {
    min-width: 900px;
    max-width: 900px;
    transform: ${({ index }) => `translateX(-${index * 890}px)`};
  }

  @media ${devices.hugeDesktop} {
    min-width: 900px;
    max-width: 900px;
    transform: ${({ index }) => `translateX(-${index * 950}px)`};
  }
`;

export const ButtonLeft = styled(MdKeyboardArrowLeft)`
  position: absolute;
  top: 125px;
  left: 10px;
  cursor: pointer;

  @media ${devices.tablet} {
    top: 250px;
  }
`;

export const ButtonRight = styled(MdKeyboardArrowRight)`
  position: absolute;
  top: 125px;
  right: 10px;
  cursor: pointer;

  @media ${devices.tablet} {
    top: 250px;
  }

  @media ${devices.desktop} {
    right: 110px;
  }

  @media ${devices.hugeDesktop} {
    right: 260px;
  }
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-family: ${theme.fonts.light};
  margin-top: 30px;
  text-align: center;
  padding: 0 20px;

  @media ${devices.tablet} {
    font-size: ${theme.fontSizes.sm};
  }
`;

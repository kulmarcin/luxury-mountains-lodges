import styled from 'styled-components';

import theme from '../theme';

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
`;

export const MainText = styled.p`
  font-size: ${theme.fontSizes.lg};
  font-family: ${theme.fonts.light};
  margin-top: 50px;
  text-align: center;
`;

export const Image = styled.img`
  min-width: 270px;
  height: 270px;
  border-radius: 25px;
  object-fit: cover;
  margin-right: 20px;

  transition: all 2s;
  transform: ${({ index }) => `translateX(-${index * 240}px)`};
`;

export const ButtonLeft = styled(MdKeyboardArrowLeft)`
  position: absolute;
  top: 125px;
  left: 10px;
`;

export const ButtonRight = styled(MdKeyboardArrowRight)`
  position: absolute;
  top: 125px;
  right: 10px;
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-family: ${theme.fonts.light};
  margin-top: 30px;
  text-align: center;
  padding: 0 20px;
`;

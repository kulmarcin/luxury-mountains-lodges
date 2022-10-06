import styled, { keyframes } from 'styled-components';
import mixins from '../mixins';
import theme from '../theme';
import devices from '../mediaQuery';

import { MdKeyboardArrowDown } from 'react-icons/md';

const jumping = keyframes`
    0% {
        transform: translateY(0);
    } 50% {
        transform: translateY(20px);
    } 100% {
        transform: translateY(0);

    }
`;

export const Landing = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  ${mixins.flexCenter}
`;

export const Title = styled.p`
  position: relative;
  z-index: 2;
  font-size: ${theme.fontSizes.xl};
  color: white;
  font-family: ${theme.fonts.bold};

  @media ${devices.tablet} {
    font-size: ${theme.fontSizes.xxl};
  }
`;

export const StyledArrowDown = styled(MdKeyboardArrowDown)`
  position: absolute;
  bottom: 20px;
  color: white;

  animation: ${jumping} 1s infinite ease-in-out;
`;

import styled, { keyframes } from 'styled-components';
import mixins from '../mixins';
import theme from '../theme';

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
  background: url('./images/mainPage.jpg');
  background-size: cover;
  background-position: center;

  ${mixins.flexCenter}
`;

export const Title = styled.p`
  font-size: ${theme.fontSizes.xl};
  color: white;
  font-family: ${theme.fonts.bold};
`;

export const StyledArrowDown = styled(MdKeyboardArrowDown)`
  position: absolute;
  bottom: 20px;
  color: white;

  animation: ${jumping} 1s infinite ease-in-out;
`;

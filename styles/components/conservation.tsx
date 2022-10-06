import styled from 'styled-components';
import devices from '../mediaQuery';
import mixins from '../mixins';
import theme from '../theme';

export const Back = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: black;
  padding: 5px 5px 5px 0;
  background-color: ${theme.colors.beigeLowerOpacity};
  font-family: ${theme.fonts.bold};
  border: 1px solid ${theme.colors.brown};
  cursor: pointer;
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
  font-size: 60px;
  color: white;
  font-family: ${theme.fonts.bold};
`;

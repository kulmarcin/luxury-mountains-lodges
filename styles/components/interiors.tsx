import styled from 'styled-components';
import theme from '../theme';
import devices from '../mediaQuery';

export const Container = styled.div<{interiorPage: boolean | undefined}>`
  padding: ${theme.spacing.base};
  margin-top: 30px;

  opacity: ${({interiorPage}) => interiorPage ? 1 : 0};
  transition: all 1s;

  &.show {
    opacity: 1;
  }
`;

export const MainText = styled.p`
  font-size: ${theme.fontSizes.lg};
  font-family: ${theme.fonts.light};
  text-align: center;

  @media ${devices.tablet} {
    font-size: ${theme.fontSizes.xl};
  }
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes.sm};
  font-family: ${theme.fonts.light};
  margin-top: 30px;

  @media ${devices.tablet} {
    font-size: ${theme.fontSizes.md};
  }

  @media ${devices.desktop} {
    font-size: ${theme.fontSizes.sm};
  }
`;

export const InteriorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;

  @media ${devices.tablet} {
    justify-content: space-around;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;

  &:hover {
    & .lodgeTitle {
      border-bottom: 1px solid black;
    }
  }
`;

export const Location = styled.p`
  font-size: ${theme.fontSizes.base};
  font-family: ${theme.fonts.light};
  margin-top: 10px;

  @media ${devices.tablet} {
    font-size: ${theme.fontSizes.md};
  }
`;

export const Title = styled.p`
  font-size: ${theme.fontSizes.md};
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.6s ease-out;
  height: 44px;


  @media ${devices.tablet} {
    font-size: ${theme.fontSizes.lg};
  }
`;

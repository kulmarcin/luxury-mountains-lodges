import styled from 'styled-components';
import theme from '../theme';
import devices from '../mediaQuery';

export const Container = styled.div`
  padding: ${theme.spacing.base};
  margin-top: 30px;
`;

export const MainText = styled.p`
  font-size: ${theme.fontSizes.lg};
  font-family: ${theme.fonts.light};

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
`;

export const InteriorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media ${devices.tablet} {
    justify-content: space-around;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
`;

export const Image = styled.img`
  width: 360px;
  height: 400px;
  object-fit: cover;
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

  @media ${devices.tablet} {
    font-size: ${theme.fontSizes.lg}
  }
`;

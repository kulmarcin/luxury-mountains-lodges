import styled from 'styled-components';
import theme from '../theme';
import mixins from '../mixins';
import devices from '../mediaQuery';

export const TextContainer = styled.div`
  padding: ${theme.spacing.md};
`;

export const MainText = styled.p`
  font-size: ${theme.fontSizes.lg};
  font-family: ${theme.fonts.light};

  @media ${devices.tablet} {
    font-size: ${theme.fontSizes.xl}
  }
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes.sm};
  font-family: ${theme.fonts.light};
  margin-top: 30px;

  @media ${devices.tablet} {
    font-size: ${theme.fontSizes.md}
  }
`;

export const Button = styled.div`
  ${mixins.flexCenter}
  width: 100px;
  height: 50px;
  border: 1px solid ${theme.colors.brown};
  border-radius: 15px;
  color: ${theme.colors.brown};

  margin-top: 20px;

  @media ${devices.tablet} {
    width: 150px;
    height: 75px;
    font-size: ${theme.fontSizes.md};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: ${({ align }) => align};
  margin-bottom: ${({ isMargin }) => (isMargin ? '50px' : 0)};
`;

export const Image = styled.img`
  width: 370px;
  height: 400px;
  object-fit: cover;
  object-position: left;
  margin-top: 20px;

  @media ${devices.tablet} {
    width: 750px;
    height: 750px;
  }
`;

import styled from 'styled-components';
import theme from '../theme';
import mixins from '../mixins';
import devices from '../mediaQuery';

interface ImageContainerProps {
  align: string;
  order: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.desktop} {
    flex-direction: row;
  }
`;

export const TextContainer = styled.div`
  padding: ${theme.spacing.md};
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

  @media ${devices.desktop} {
    font-size: ${theme.fontSizes.sm};
  }
`;

export const Button = styled.div`
  ${mixins.flexCenter}
  width: 100px;
  height: 50px;
  border: 1px solid ${theme.colors.brown};
  border-radius: 15px;
  color: ${theme.colors.brown};
  cursor: pointer;
  transition: all 0.25s;

  margin-top: 20px;

  @media ${devices.tablet} {
    width: 150px;
    height: 75px;
    font-size: ${theme.fontSizes.md};
  }

  &:hover {
    color: white;
    background-color: ${theme.colors.brown};
  }
`;

export const ImageAlignContainer = styled.div<ImageContainerProps>`
  width: 100%;
  display: flex;
  justify-content: ${({ align }) => align};

  @media ${devices.desktop} {
    order: ${({ order }) => order};
  }
`
export const ImageContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 0;
  width: 370px;
  height: 400px;

  @media ${devices.tablet} {
    width: 750px;
    height: 750px;
  }
`;

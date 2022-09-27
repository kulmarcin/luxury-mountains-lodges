import styled from 'styled-components';
import theme from '../theme';

export const Container = styled.div`
  padding: ${theme.spacing.base};
  margin-top: 30px;
`;

export const MainText = styled.p`
  font-size: ${theme.fontSizes.lg};
  font-family: ${theme.fonts.light};
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes.sm};
  font-family: ${theme.fonts.light};
  margin-top: 30px;
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
`;
export const Title = styled.p`
  font-size: ${theme.fontSizes.md};
`;

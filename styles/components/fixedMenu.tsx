import styled from 'styled-components';
import theme from '../theme';
import devices from '../mediaQuery';

export const Container = styled.div<{isPastLanding: boolean}>`
  width: calc(100% - 40px);
  height: 50px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: ${({isPastLanding}) => isPastLanding ? 'black' : 'white'};
  z-index: 6;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Menu = styled.div`
  padding-top: 70px;
  width: 100%;
  height: calc(100% - 70px);
  position: fixed;
  top: 0;
  background-color: ${theme.colors.brown};
  z-index: 5;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  color: white;
  opacity: 0;
  transform: translateY(-100%);
  transition: transform 1s, opacity 1s;

  &.active {
    transform: translateY(0);
    opacity: 1;
  }

  @media ${devices.desktop} {
    flex-direction: row;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${theme.fontSizes.lg};
  font-family: ${theme.fonts.light};
  padding: 0 20px;

  @media ${devices.tablet} {
    font-size: ${theme.fontSizes.xl};
    padding: 0 120px;
  }
`;

export const MainElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  cursor: pointer;

  @media ${devices.desktop} {
    & svg {
      transition: all 0.5s;
      transform: translateX(-5px);
    }
    & svg {
      opacity: 0;
    }

    &:hover {
      & svg {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;

export const LowerMenu = styled.div`
  display: flex;
  margin-top: 40px;
  padding: 0 20px;
  justify-content: space-between;

  @media ${devices.tablet} {
    padding: 0 120px;
  }

  @media ${devices.desktop} {
    padding: 0;
    margin-top: 0;
    width: 50%;
    justify-content: space-around;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 150px;

  @media ${devices.tablet} {
    max-width: 250px;
  }

  @media ${devices.desktop} {
    max-width: 400px;
  }
`;

export const Right = styled(Left)``;

export const LowerLeftElement = styled.div`
  font-family: ${theme.fonts.bold};
  margin-top: 20px;
  cursor: pointer;

  @media ${devices.desktop} {
    transition: border 0.3s;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid white;
    }
  }
`;

export const LowerRightElement = styled.div`
  font-family: ${theme.fonts.light};
  margin-top: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media ${devices.desktop} {
    & div {
      transition: border 0.3s;
      border-bottom: 1px solid transparent;
    }
    &:hover {
      & div {
        border-bottom: 1px solid white;
      }
    }
  }
`;

export const Contact = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  @media ${devices.desktop} {
    position: absolute;
    bottom: 20px;
  }
`;

export const EmailTel = styled.div`
  font-family: ${theme.fonts.light};
  font-size: ${theme.fontSizes.md};
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-top: 40px;

  @media ${devices.desktop} {
    position: absolute;
    bottom: 20px;
    left: 120px;
    cursor: pointer;
  }
`;

///////LODGES

export const LodgesMainContainer = styled.div`
  padding: 20px;
`;
export const BackButton = styled.div`
  display: flex;
  align-items: center;
  font-size: ${theme.fontSizes.lg};
  font-family: ${theme.fonts.light};
  cursor: pointer;

  @media ${devices.tablet} {
    font-size: ${theme.fontSizes.xl};
    padding: 0 80px;
  }
`;

export const LodgesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding-left: 30px;
  font-size: ${theme.fontSizes.md};

  @media ${devices.tablet} {
    font-size: ${theme.fontSizes.xl};
    padding: 0 120px;
  }
`;

export const LodgeElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;

  @media ${devices.desktop} {
    & svg {
      transition: all 0.5s;
      transform: translateX(-5px);
    }
    & svg {
      opacity: 0;
    }

    &:hover {
      & svg {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;

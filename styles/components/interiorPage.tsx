import styled from 'styled-components';
import devices from '../mediaQuery';
import mixins from '../mixins';
import theme from '../theme';

interface AccomodationProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainImage = styled.img`
  width: 100vw;
  height: 600px;
  object-fit: cover;
`;

export const Title = styled.p`
  font-family: ${theme.fonts.bold};
  font-size: ${theme.fontSizes.lg};
  margin-top: 10px;
`;

export const Location = styled.p`
  font-size: ${theme.fontSizes.sm};
  font-family: ${theme.fonts.light};
`;

export const Description = styled.p`
  font-family: ${theme.fonts.light};
  font-size: ${theme.fontSizes.xs};
  text-align: justify;
  padding: 20px;
`;

export const Back = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;

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

export const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Feature = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: ${theme.fontSizes.xs};
`;

export const AccomodationsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-bottom: 40px;
  margin-top: 60px;
`;

export const AccomodationsHeading = styled.div`
  font-family: ${theme.fonts.bold};
  font-size: ${theme.fontSizes.md};
`;

export const Accomodation = styled.div`
  display: flex;
  align-items: center;
`;

export const AccomodationElement = styled.div<AccomodationProps>`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 10px;
  outline: ${({ selected }) =>
    selected ? `1px solid ${theme.colors.brown}` : 'none'};
  cursor: pointer;
`;
export const AccomodationTitle = styled.p`
  font-family: ${theme.fonts.bold};
`;

export const AccomodationDescription = styled.ul`
  font-family: ${theme.fonts.light};
  font-size: ${theme.fontSizes.xs};
  margin: 0 0 0 10px;
`;

export const SelectContainer = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;

  @media ${devices.tablet} {
    justify-content: center;
  }
`;
export const GuestNumberContainer = styled.div`
  ${mixins.flexCenter}
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.brown};
  width: 170px;
  height: 50px;
  cursor: default;

  @media ${devices.tablet} {
    margin-right: 20px;
  }
`;

export const GuestNumber = styled.p`
  border: none;
  outline: none;
  font-size: ${theme.fontSizes.base};
`;

export const ArrowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
  cursor: pointer;
`;

type ref = any;

export const DateSelect = styled.div<ref>`
  ${mixins.flexCenter}
  flex-direction: column;
  width: 170px;
  height: 50px;
  background-color: white;
  border: 1px solid ${theme.colors.brown};
  cursor: pointer;
`;

export const Price = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 20px;
`;

export const PriceTitle = styled.p`
  font-size: ${theme.fontSizes.md};
  font-family: ${theme.fonts.bold};
`;

export const Error = styled.div`
  font-size: ${theme.fontSizes.sm};
  font-family: ${theme.fonts.light};
  color: red;
  margin-top: 10px;
  padding-bottom: 10px;
`;

export const ReserveButton = styled.div`
  width: 150px;
  height: 50px;
  ${mixins.flexCenter};
  border: 1px solid black;
  background-color: ${theme.colors.brown};
  font-family: ${theme.fonts.bold};
  color: white;
  margin-bottom: 20px;
  cursor: pointer;
`;

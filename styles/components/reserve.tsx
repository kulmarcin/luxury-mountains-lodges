import styled from 'styled-components';
import devices from '../mediaQuery';
import mixins from '../mixins';
import theme from '../theme';

export const Container = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;

  @media ${devices.tablet} {
    height: 100vh;
  }

  @media ${devices.desktop} {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding-top: 50px;
    height: calc(100vh - 70px);
  }
`;

export const Itinerary = styled.div`
  width: calc(100% - 20px);
  padding: 10px;
  margin-top: 50px;
  background-color: ${theme.colors.beige};

  @media ${devices.desktop} {
    width: 350px;
    height: 360px;
  }
`;

export const ItineraryTitle = styled.p`
  font-size: ${theme.fontSizes.sm};
  margin-bottom: 5px;
`;

export const ItineraryDescription = styled.p`
  margin: 10px 0;
  color: gray;
  font-size: ${theme.fontSizes.xs};
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.beigeDark};
  border-radius: 50px;
`;

export const LodgeContainer = styled.div`
  font-family: ${theme.fonts.light};
`;

export const LodgeTitle = styled.p`
  font-size: ${theme.fontSizes.md};
  margin-top: 10px;
`;

export const LodgeLocation = styled.p`
  font-size: ${theme.fontSizes.sm};
`;

export const LodgeDate = styled.p`
  font-family: ${theme.fonts.bold};
  margin-top: 10px;
  color: ${theme.colors.brownDark};
  display: flex;
  align-items: center;
`;

export const LodgeGuests = styled.p`
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.brownDark};
`;
export const AccomodationType = styled(LodgeGuests)``;
export const LodgeCostPerson = styled(LodgeGuests)``;

export const LodgeTotalCost = styled(LodgeGuests)`
  margin-top: 20px;
  font-size: ${theme.fontSizes.md};
`;

export const FormContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media ${devices.desktop} {
    width: 800px;
    height: 500px;
    align-items: center;
  }
`;

type InterfaceProps = {
  width: number;
};

export const FormElement = styled.div<InterfaceProps>`
  width: 100%;
  margin-top: 20px;

  @media ${devices.tablet} {
    width: ${({ width }) => `${width}px`};
  }

  @media ${devices.desktop} {
    margin-top: 0;
  }
`;

export const Label = styled.p`
  font-family: ${theme.fonts.bold};
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #ced4da;
  font-family: ${theme.fonts.light};
  font-size: ${theme.fontSizes.sm};

  &:focus {
    outline: 2px solid ${theme.colors.beige};
  }
`;

export const StyledInput = styled.input`
  width: calc(100% - 10px);
  height: 36px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #ced4da;
  padding-left: 5px;
  font-family: ${theme.fonts.light};
  font-size: ${theme.fontSizes.sm};

  &:focus {
    outline: 2px solid ${theme.colors.beige};
  }
`;

export const StyledTextArea = styled.textarea`
  width: calc(100% - 10px);
  height: 100px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #ced4da;
  padding-left: 5px;
  padding-top: 5px;
  resize: none;
  font-family: ${theme.fonts.light};
  font-size: ${theme.fontSizes.sm};

  &:focus {
    outline: 2px solid ${theme.colors.beige};
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.div`
  ${mixins.flexCenter};
  width: 50%;
  height: 40px;
  background-color: ${theme.colors.brown};
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: ${theme.fontSizes.xs}
`;

export const SuccessMessageContainer = styled.div`
  ${mixins.flexCenter}
  flex-direction: column;
  height: calc(100vh - 70px);
`;

export const SuccessMessageTitle = styled.p`
  font-family: ${theme.fonts.bold};
  font-size: ${theme.fontSizes.xl};

  @media ${devices.tablet} {
    font-size: ${theme.fontSizes.xxl};
  }
`;

export const SuccessMessageDescription = styled.p`
  font-family: ${theme.fonts.light};
  font-size: ${theme.fontSizes.lg};
  text-align: center;

  @media ${devices.tablet} {
    font-size: ${theme.fontSizes.xl};
  }
`;

export const StyledInputCheckbox = styled.input`
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    margin: calc(0.75em - 11px) 0.25rem 0 0;
    vertical-align: top;
    border: 1px solid black;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;

    &[type='radio'] {
        border-radius: 50%;
    }

    &[type='radio']:focus,
    &[type='radio']:active,
    &[type='checkbox']:focus,
    &[type='checkbox']:active {
        border: 1px solid black !important;
    }

    &[type='radio']:checked {
        background-image: ${({ color }) => `url('data:image/svg+xml;utf8,<svg stroke="${color}" fill="${color}" stroke-width="0" viewBox="0 0 512 512" height="10" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>')`};
        background-repeat: no-repeat;
        background-position: center;

        border: 1px solid black;
    }

    &[type='checkbox']:checked {
        background-image: ${({ color }) => `url('data:image/svg+xml;utf8,<svg stroke="${color}" fill="${color}" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path></svg>')`};
        background-repeat: no-repeat;
        background-position: center;

        border: 1px solid black;
    }
`;

export const LabelCheckbox = styled.label<{dataConsent?: boolean; submitError?: boolean}>`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: ${({dataConsent, submitError}) => !dataConsent && submitError ? 'red' : 'black'};
`;

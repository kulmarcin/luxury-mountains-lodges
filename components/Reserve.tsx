import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import { Interior } from '../pages/interior/[id]';
import {
  AccomodationType,
  ButtonContainer,
  Container,
  Divider,
  ErrorMessage,
  FormContainer,
  FormElement,
  Itinerary,
  ItineraryDescription,
  ItineraryTitle,
  Label,
  LabelCheckbox,
  LodgeContainer,
  LodgeCostPerson,
  LodgeDate,
  LodgeGuests,
  LodgeLocation,
  LodgeTitle,
  LodgeTotalCost,
  StyledInput,
  StyledInputCheckbox,
  StyledSelect,
  StyledTextArea,
  SubmitButton,
  SuccessMessageContainer,
  SuccessMessageDescription,
  SuccessMessageTitle
} from '../styles/components/reserve';

import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import countryList from '../assets/countryList';

interface Props {
  interior: Interior;
  startDate: Date | null;
  endDate: Date | null;
  currentPrice: string | null;
  guestsNumber: number;
  currentAccomodationType: string;
  formIsSent: boolean;
  setIsSent: React.Dispatch<SetStateAction<boolean>>;
}

interface FinalData {
  title: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  country: string;
  email: string;
  guestType: string;
  additionalText: string;
}

export default function Reserve({
  interior,
  startDate,
  endDate,
  currentPrice,
  guestsNumber,
  currentAccomodationType,
  formIsSent,
  setIsSent
}: Props) {
  const [form, setForm] = useState({
    title: ' ',
    firstName: '',
    lastName: '',
    contactNumber: '',
    country: ' ',
    email: '',
    guestType: ' ',
    additionalText: '',
    newsletter: false,
    dataConsent: false
  });
  const [submitError, setSubmitError] = useState(false);

  const ContainerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (ContainerRef && ContainerRef.current) {
      window.scrollTo({
        behavior: 'smooth',
        top: ContainerRef.current.offsetTop
      });
    }
  }, []);

  let pricePerPerson;

  if (currentPrice) {
    pricePerPerson = (+currentPrice / guestsNumber).toFixed(2);
  }

  const handleForm = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    value: string
  ) => {
    switch (value) {
      case 'title':
        setForm({ ...form, title: e.target.value });
        break;
      case 'firstName':
        setForm({ ...form, firstName: e.target.value });
        break;
      case 'lastName':
        setForm({ ...form, lastName: e.target.value });
        break;
      case 'contactNumber':
        setForm({ ...form, contactNumber: e.target.value });
        break;
      case 'country':
        setForm({ ...form, country: e.target.value });
        break;
      case 'email':
        setForm({ ...form, email: e.target.value });
        break;
      case 'guestType':
        setForm({ ...form, guestType: e.target.value });
        break;
      case 'additionalText':
        setForm({ ...form, additionalText: e.target.value });
        break;
    }
  };

  const validateInput = () => {
    if (
      form.title === ' ' ||
      form.guestType === ' ' ||
      form.country === ' ' ||
      form.email === '' ||
      !form.email.includes('@') ||
      form.firstName === '' ||
      form.lastName === '' ||
      form.contactNumber === '' ||
      !form.dataConsent
    ) {
      return false;
    } else {
      return true;
    }
  };

  const handleRadio = (radio: 'dataConsent' | 'newsletter') => {
      setForm({...form, [radio]: !form[radio]})
  }

  const handleSubmit = () => {
    if (!validateInput()) {
      setSubmitError(true);
      return;
    } else {
      setSubmitError(false);

      // send to db logic
      console.log(form);

      setIsSent(true);
    }
  };

  return (
    <Container ref={ContainerRef}>
      {!formIsSent && (
        <>
          <Itinerary>
            <ItineraryTitle>Your Itinerary</ItineraryTitle>

            <Divider />

            <ItineraryDescription>
              This is a summary of the accommodation you’ve selected. One of our
              Travel Advisers will contact you shortly to plan your trip.
            </ItineraryDescription>

            <Divider />

            <LodgeContainer>
              <LodgeTitle>{interior.title}</LodgeTitle>
              <LodgeLocation>{interior.location}</LodgeLocation>
              <LodgeDate>
                {startDate?.toLocaleDateString()}{' '}
                {
                  <HiOutlineArrowNarrowRight
                    style={{ margin: '0px 5px 2px 5px' }}
                  />
                }{' '}
                {endDate?.toLocaleDateString()}
              </LodgeDate>
              <LodgeGuests>Guests: {guestsNumber}</LodgeGuests>
              <AccomodationType>
                Accomodation Type: {currentAccomodationType}
              </AccomodationType>
              <LodgeCostPerson>
                Cost: ${pricePerPerson} per person
              </LodgeCostPerson>
              <LodgeTotalCost>Total: ${currentPrice}</LodgeTotalCost>
            </LodgeContainer>
          </Itinerary>

          <FormContainer>
            <FormElement width={85}>
              <Label>Title</Label>
              <StyledSelect
                value={form.title}
                onChange={e => handleForm(e, 'title')}
              >
                <option value=" "></option>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Dr.">Dr.</option>
                <option value="Prof.">Prof.</option>
              </StyledSelect>
              {submitError && form.title === ' ' && (
                <ErrorMessage>Required</ErrorMessage>
              )}
            </FormElement>

            <FormElement width={330}>
              <Label>First Name</Label>
              <StyledInput
                type="text"
                value={form.firstName}
                onChange={e => handleForm(e, 'firstName')}
              />
              {submitError && form.firstName === '' && (
                <ErrorMessage>Required</ErrorMessage>
              )}
            </FormElement>

            <FormElement width={330}>
              <Label>Last Name</Label>
              <StyledInput
                type="text"
                value={form.lastName}
                onChange={e => handleForm(e, 'lastName')}
              />
              {submitError && form.lastName === '' && (
                <ErrorMessage>Required</ErrorMessage>
              )}
            </FormElement>

            <FormElement width={377}>
              <Label>Contact Number</Label>
              <StyledInput
                type="text"
                value={form.contactNumber}
                onChange={e => handleForm(e, 'contactNumber')}
              />
              {submitError && form.contactNumber === '' && (
                <ErrorMessage>Required</ErrorMessage>
              )}
            </FormElement>

            <FormElement width={377}>
              <Label>Country</Label>
              <StyledSelect
                value={form.country}
                onChange={e => handleForm(e, 'country')}
              >
                <option></option>
                {countryList.map((el, idx) => (
                  <option key={idx} value={el}>
                    {el}
                  </option>
                ))}
              </StyledSelect>
              {submitError && form.country === ' ' && (
                <ErrorMessage>Required</ErrorMessage>
              )}
            </FormElement>

            <FormElement width={377}>
              <Label>Email</Label>
              <StyledInput
                type="text"
                value={form.email}
                onChange={e => handleForm(e, 'email')}
              />
              {submitError && form.email === '' ? (
                <ErrorMessage>Required</ErrorMessage>
              ) : (
                submitError &&
                !form.email.includes('@') && (
                  <ErrorMessage>Please enter proper email address</ErrorMessage>
                )
              )}
            </FormElement>

            <FormElement width={377}>
              <Label>I am</Label>
              <StyledSelect
                value={form.guestType}
                onChange={e => handleForm(e, 'guestType')}
              >
                <option></option>
                <option value="Guest">Guest</option>
                <option value="Travel Partner">Travel Partner</option>
              </StyledSelect>
              {submitError && form.guestType === ' ' && (
                <ErrorMessage>Required</ErrorMessage>
              )}
            </FormElement>

            <FormElement width={780}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <Label>Is there anything else you'd like to let us know?</Label>
              <StyledTextArea
                value={form.additionalText}
                onChange={e => handleForm(e, 'additionalText')}
              />
            </FormElement>
            <FormElement width={780}>
              <LabelCheckbox>
                <StyledInputCheckbox type="checkbox" color='black' checked={form.newsletter} onChange={() => handleRadio('newsletter')}/>
                Sign up to receive news and blog posts from Singita
              </LabelCheckbox>
            </FormElement>
            <FormElement width={780}>
              <LabelCheckbox dataConsent={form.dataConsent} submitError={submitError}>
                <StyledInputCheckbox type="checkbox" color='black' checked={form.dataConsent} onChange={() => handleRadio('dataConsent')}/>
                I consent to my submitted data being collected and stored
              </LabelCheckbox>
            </FormElement>

            <ButtonContainer>
              <SubmitButton onClick={handleSubmit}>Send Enquiry</SubmitButton>
            </ButtonContainer>
          </FormContainer>
        </>
      )}
      {formIsSent && (
        <SuccessMessageContainer>
          <SuccessMessageTitle>Thank you!</SuccessMessageTitle>
          <SuccessMessageDescription>
            Our employee will contact you soon.
          </SuccessMessageDescription>
        </SuccessMessageContainer>
      )}
    </Container>
  );
}

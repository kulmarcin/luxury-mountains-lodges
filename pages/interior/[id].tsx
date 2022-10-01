import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { forwardRef, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
  Accomodation,
  AccomodationDescription,
  AccomodationElement,
  AccomodationsContainer,
  AccomodationsHeading,
  AccomodationTitle,
  ArrowsContainer,
  Back,
  Container,
  DateSelect,
  Description,
  Feature,
  FeaturesContainer,
  GuestNumber,
  GuestNumberContainer,
  Location,
  MainImage,
  Price,
  PriceTitle,
  SelectContainer,
  Title,
  Error,
  ReserveButton
} from '../../styles/components/interiorPage';
import { BsChevronCompactLeft } from 'react-icons/bs';

import interiorsData from '../../assets/interiorsData';

import { RiParkingBoxFill } from 'react-icons/ri';
import { FaMountain, FaBath } from 'react-icons/fa';
import {
  MdSmokeFree,
  MdKitchen,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown
} from 'react-icons/md';
import { BiWifi } from 'react-icons/bi';
import {
  BsFillPersonFill,
  BsStar,
  BsStarHalf,
  BsStarFill
} from 'react-icons/bs';

interface Interior {
  id: number;
  title: string;
  location: string;
  image: string;
  alt: string;
  description: string;
  features: string[];
  price: number;
  capacity: number;
  tiers: { regular: string[]; luxury: string[] };
}

const InteriorPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  let interior: undefined | Interior;
  if (id) {
    interior = interiorsData.find(el => el.id === +id);
  }

  const [multiplier, setMultiplier] = useState(1);
  const [guestsNumber, setGuestsNumber] = useState(1);
  const [startDate, setStartDate] = useState<null | Date>(new Date());
  const [endDate, setEndDate] = useState<null | Date>(null);
  const [totalDays, setTotalDays] = useState(0);
  const [currentPrice, setCurrentPrice] = useState<null | string>(null);

  useEffect(() => {
    if (!endDate) setCurrentPrice(null);
    if (startDate && endDate && interior) {
      let differenceBetweenDates = Math.ceil(
        (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
      );

      setTotalDays(differenceBetweenDates);

      setCurrentPrice(
        (multiplier * guestsNumber * totalDays * interior.price).toFixed(2)
      );
    }
  }, [startDate, endDate, guestsNumber, multiplier, totalDays, interior]);

  const handleAccomodation = (value: number) => {
    setMultiplier(value);
  };

  const handleGuest = (direction: string) => {
    if (direction === 'up') {
      if (guestsNumber === interior?.capacity) return;

      setGuestsNumber(state => state + 1);
    } else {
      if (guestsNumber === 1) return;

      setGuestsNumber(state => state - 1);
    }
  };

  const handleCalendar = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const renderFeatures = (data: string[]) => {
    const temp = data.map((el, idx) => {
      switch (el) {
        case 'bath':
          return (
            <Feature key={idx}>
              <FaBath size={30} style={{ marginRight: 10 }} />
              Bathtub
            </Feature>
          );
        case 'nosmoke':
          return (
            <Feature key={idx}>
              <MdSmokeFree size={30} style={{ marginRight: 10 }} />
              Non-smoking Areas
            </Feature>
          );
        case 'wifi':
          return (
            <Feature key={idx}>
              <BiWifi size={30} style={{ marginRight: 10 }} />
              Free WiFi
            </Feature>
          );
        case 'parking':
          return (
            <Feature key={idx}>
              <RiParkingBoxFill size={30} style={{ marginRight: 10 }} />
              Free Parking
            </Feature>
          );
        case 'mountain':
          return (
            <Feature key={idx}>
              <FaMountain size={30} style={{ marginRight: 10 }} />
              Mountain View
            </Feature>
          );
        case 'Kitchen':
          return (
            <Feature key={idx}>
              <MdKitchen size={30} style={{ marginRight: 10 }} />
              Kitchen
            </Feature>
          );
      }
    });
    return temp.map(el => el);
  };

  if (!interior) {
    return <Error />;
  }

  interface CustomButton {
    value?: Date;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }
  // eslint-disable-next-line react/display-name
  const CustomDatePickerButton = forwardRef(
    ({ value, onClick }: CustomButton, ref) => (
      <DateSelect onClick={onClick} ref={ref}>
        <div style={{ fontWeight: 'bold' }}>Date</div>
        {value}
      </DateSelect>
    )
  );

  return (
    <Container>
      <Back onClick={() => router.push('/')}>
        <BsChevronCompactLeft />
        Back
      </Back>
      <MainImage src={interior.image} />
      <Title>{interior.title}</Title>
      <Location>{interior.location}</Location>

      <Description>{interior.description}</Description>

      <FeaturesContainer>
        <Feature>
          <BsFillPersonFill size={30} style={{ marginRight: 10 }} />{' '}
          <p>Sleeps {interior.capacity}</p>
        </Feature>
        {renderFeatures(interior.features)}
      </FeaturesContainer>

      <AccomodationsContainer>
        <AccomodationsHeading>
          Select Preferred Accomodation
        </AccomodationsHeading>

        <AccomodationElement
          selected={multiplier === 1}
          onClick={() => handleAccomodation(1)}
        >
          <Accomodation>
            <BsStar size={30} style={{ marginRight: 10 }} />
            <AccomodationTitle>Simple</AccomodationTitle>
          </Accomodation>
          <AccomodationDescription>
            <li>No additional benefits</li>
          </AccomodationDescription>
        </AccomodationElement>

        <AccomodationElement
          selected={multiplier === 1.5}
          onClick={() => handleAccomodation(1.5)}
        >
          <Accomodation>
            <BsStarHalf size={30} style={{ marginRight: 10 }} />
            <AccomodationTitle>Regular</AccomodationTitle>
          </Accomodation>
          <AccomodationDescription>
            {interior.tiers.regular.map((el, idx) => (
              <li key={idx}>{el}</li>
            ))}
          </AccomodationDescription>
        </AccomodationElement>

        <AccomodationElement
          selected={multiplier === 2}
          onClick={() => handleAccomodation(2)}
        >
          <Accomodation>
            <BsStarFill size={30} style={{ marginRight: 10 }} />
            <AccomodationTitle>Luxury</AccomodationTitle>
          </Accomodation>
          <AccomodationDescription>
            {interior.tiers.luxury.map((el, idx) => (
              <li key={idx}>{el}</li>
            ))}
          </AccomodationDescription>
        </AccomodationElement>
      </AccomodationsContainer>

      <SelectContainer>
        <GuestNumberContainer>
          <div style={{ fontWeight: 'bold' }}>Guests</div>
          <GuestNumber>{guestsNumber}</GuestNumber>
          <ArrowsContainer>
            <MdKeyboardArrowUp size={20} onClick={() => handleGuest('up')} />
            <MdKeyboardArrowDown
              size={20}
              onClick={() => handleGuest('down')}
            />
          </ArrowsContainer>
        </GuestNumberContainer>

        <DatePicker
          selected={startDate}
          onChange={handleCalendar}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
          withPortal
          customInput={<CustomDatePickerButton />}
        />
      </SelectContainer>

      {currentPrice ? (
        <Price>
          <PriceTitle>Your Price: ${currentPrice}</PriceTitle>
        </Price>
      ) : (
        <Error>Please select proper date of stay</Error>
      )}

      {currentPrice && <ReserveButton>Reserve</ReserveButton>}
    </Container>
  );
};

export default InteriorPage;

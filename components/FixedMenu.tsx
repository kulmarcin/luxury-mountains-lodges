import React, { useEffect, useState } from 'react';

import {
  Container,
  ButtonContainer,
  Menu,
  Main,
  MainElement,
  LowerMenu,
  Left,
  Right,
  LowerLeftElement,
  LowerRightElement,
  Contact,
  EmailTel,
  Socials,
  BackButton,
  LodgesMainContainer,
  LodgesContainer,
  LodgeElement
} from '../styles/components/fixedMenu';

import { CgMenu, CgLogIn, CgGift, CgShoppingBag } from 'react-icons/cg';
import { VscChromeClose } from 'react-icons/vsc';
import {
  AiOutlineCamera,
  AiOutlineInstagram,
  AiOutlineTwitter
} from 'react-icons/ai';
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import interiorsData from '../assets/interiorsData';

export default function FixedMenu() {
  const [isMenu, setIsMenu] = useState(false);
  const [currentMenu, setCurrentMenu] = useState('main');

  const mainMenu = [
    { name: 'Lodges', method: () => setCurrentMenu('lodges') },
    { name: 'Private Villa Collection' },
    { name: 'Conservation' },
    { name: 'Wildlife' },
    { name: 'About' }
  ];
  const lowerLeftMenu = [
    'Photos & Videos',
    'Blog',
    'Awards',
    'Rates',
    'Promotions',
    'Press Room',
    'Careers'
  ];
  const lowerRightMenu = [
    {
      name: 'Travel Partner Site',
      icon: <AiOutlineCamera style={{ marginRight: 10 }} size={20} />
    },
    {
      name: 'Trade Login',
      icon: <CgLogIn style={{ marginRight: 10 }} size={20} />
    },
    {
      name: 'Boutique & Gallery',
      icon: <CgShoppingBag style={{ marginRight: 10 }} size={20} />
    },
    {
      name: 'Suppliers',
      icon: <CgGift style={{ marginRight: 10 }} size={20} />
    }
  ];

  const socials = [
    <AiOutlineInstagram key={1} size={24} style={{ marginRight: 10 }} />,
    <FaFacebookF key={2} size={20} style={{ marginRight: 10 }} />,
    <AiOutlineTwitter key={3} size={24} style={{ marginRight: 10 }} />,
    <FaLinkedinIn key={4} size={24} style={{ marginRight: 10 }} />
  ];

  useEffect(() => {
    if (isMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [isMenu]);

  return (
    <>
      <Container>
        LOGO
        {isMenu ? (
          <ButtonContainer onClick={() => setIsMenu(!isMenu)}>
            Close
            <VscChromeClose size={20} style={{ marginLeft: 5 }} />
          </ButtonContainer>
        ) : (
          <ButtonContainer onClick={() => setIsMenu(!isMenu)}>
            Menu
            <CgMenu size={20} style={{ marginLeft: 5 }} />
          </ButtonContainer>
        )}
      </Container>
      <Menu className={isMenu && 'active'}>
        {currentMenu === 'main' && (
          <>
            <Main>
              {mainMenu.map((el, idx) => (
                <MainElement key={idx} onClick={el.method && el.method}>
                  {el.name} <BsChevronCompactRight />
                </MainElement>
              ))}
            </Main>

            <LowerMenu>
              <Left>
                {lowerLeftMenu.map((el, idx) => (
                  <LowerLeftElement key={idx}>{el}</LowerLeftElement>
                ))}

                <Contact>
                  <EmailTel>enquiries@company.com</EmailTel>
                  <EmailTel>+27 (0) 21 777 7272</EmailTel>
                </Contact>

                <Socials>{socials.map(el => el)}</Socials>
              </Left>

              <Right>
                {lowerRightMenu.map((el, idx) => (
                  <LowerRightElement key={idx}>
                    {el.icon} <div>{el.name}</div>
                  </LowerRightElement>
                ))}
              </Right>
            </LowerMenu>
          </>
        )}

        {currentMenu === 'lodges' && (
          <LodgesMainContainer>
            <BackButton onClick={() => setCurrentMenu('main')}>
              <BsChevronCompactLeft size={20} style={{ marginRight: 10 }} />{' '}
              Lodges
            </BackButton>

            <LodgesContainer>
              {interiorsData.map((el, idx) => (
                <LodgeElement key={idx}>
                  {el.title} <BsChevronCompactRight size={40} />
                </LodgeElement>
              ))}
            </LodgesContainer>
          </LodgesMainContainer>
        )}
      </Menu>
    </>
  );
}

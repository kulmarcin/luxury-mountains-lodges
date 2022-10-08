import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Interiors from '../../components/Interiors';

import styled, {keyframes} from 'styled-components';
import theme from '../../styles/theme';

import { BsChevronCompactLeft } from 'react-icons/bs';

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

const onStart = keyframes`
    0% {
      opacity: 0;
    } 100% {
      opacity:1;
    }
`;

const MainContainer = styled.div`
    animation: ${onStart} 1s ease-out forwards;
`;

const AllInteriors: NextPage = () => {
  const router = useRouter();

  return (
    <MainContainer>
      <Back onClick={() => router.push('/')}>
        <BsChevronCompactLeft /> Back
      </Back>
      <Interiors interiorPage={true}/>
    </MainContainer>
  );
};

export default AllInteriors;

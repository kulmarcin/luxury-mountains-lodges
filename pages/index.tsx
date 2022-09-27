import type { NextPage } from 'next';
import Head from 'next/head';
import GlobalStyle from '../styles/globalStyle';

import sectionData from '../assets/sectionData';

import { Landing, StyledArrowDown, Title } from '../styles/components/landing';
import Section from '../components/Section';
import Slider from '../components/Slider';
import Interiors from '../components/Interiors';

const Home: NextPage = () => {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>Luxury Mountain Lodges</title>
        <meta name="description" content="Luxury Mountain Lodges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing>
        <Title>Place of Miracles</Title>
        <StyledArrowDown size={64} />
      </Landing>
      {sectionData.map(el => (
        <Section
          key={el.id}
          mainText={el.mainText}
          description={el.description}
          image={el.image}
          align={el.align}
          isStory={el.isStory}
        />
      ))}
      <Slider />
      <Interiors />
    </div>
  );
};

export default Home;

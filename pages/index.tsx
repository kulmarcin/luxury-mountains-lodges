import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import sectionData from '../assets/sectionData';

import { Landing, StyledArrowDown, Title } from '../styles/components/landing';
import Section from '../components/Section';
import Slider from '../components/Slider';
import Interiors from '../components/Interiors';
import FixedMenu from '../components/FixedMenu';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';

const Home: NextPage = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflowY = 'hidden';
    } else {
      setTimeout(() => {
        document.body.style.overflowY = 'scroll';
      }, 1000);
    }
  }, [isLoading]);

  return (
    <div>
      <Head>
        <title>Luxury Mountain Lodges</title>
        <meta name="description" content="Luxury Mountain Lodges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FixedMenu router={router} />

      <Loader loading={isLoading} />

      <Landing id="Landing">
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
          order={el.order}
          router={router}
        />
      ))}
      <Slider />
      <Interiors />
    </div>
  );
};

export default Home;

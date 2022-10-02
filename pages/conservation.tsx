import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { BsChevronCompactLeft } from 'react-icons/bs';

import { Back, Landing, Title } from '../styles/components/conservation';

import sectionConservationData from '../assets/sectionConservationData';
import SectionConservation from '../components/SectionConservation';

const Conservation: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Conservation</title>
        <meta
          name="description"
          content="Conservation Luxury Mountain Lodges"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Back onClick={() => router.push('/')}>
        <BsChevronCompactLeft /> Back
      </Back>

      <Landing>
        <Title>Conservation</Title>
      </Landing>

      {sectionConservationData.map(el => (
        <SectionConservation
          key={el.id}
          mainText={el.mainText}
          description={el.description}
          image={el.image}
          align={el.align}
          order={el.order}
          isButton={el.isButton}
          router={router}
        />
      ))}
    </>
  );
};

export default Conservation;

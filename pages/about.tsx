import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Back, Landing, Title } from '../styles/components/about';

import { BsChevronCompactLeft } from 'react-icons/bs';

import sectionDataAbout from '../assets/sectionAboutData';
import SectionAbout from '../components/SectionAbout';

const About: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Luxury Mountain Lodges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Back onClick={() => router.push('/')}>
        <BsChevronCompactLeft />
        Back
      </Back>

      <Landing>
        <Title>About</Title>
      </Landing>

      {sectionDataAbout.map(el => (
        <SectionAbout
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
    </div>
  );
};

export default About;

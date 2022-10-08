import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import sectionData from '../assets/sectionData';

import { Landing, MainContainer, StyledArrowDown, Title } from '../styles/components/landing';
import Section from '../components/Section';
import Slider from '../components/Slider';
import Interiors from '../components/Interiors';
import FixedMenu from '../components/FixedMenu';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const image = document.querySelector('#Landing img') as HTMLImageElement
    const text = document.querySelector('#Landing p') as HTMLParagraphElement

    if(!image) return

    const scrollTransform = () => {
      image.style.transform = `scale(${window.scrollY / 1000 + 1})`;
      text.style.transform = `translateY(${-window.scrollY/2}px)`
      text.style.opacity = `${1 - window.scrollY / 250}`
    };

    window.addEventListener('scroll', scrollTransform)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    }, {rootMargin: '-300px 0px -300px 0px'})

    const sections = document.querySelectorAll('.section')
    sections.forEach(el => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', scrollTransform)
    }
  }, []);

  return (
    <MainContainer>
      <Head>
        <title>Luxury Mountain Lodges</title>
        <meta name="description" content="Luxury Mountain Lodges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FixedMenu router={router} />

      <Landing id="Landing">
        <Image
          src={'/images/mainPage.jpg'}
          alt="Landing"
          layout="fill"
          objectFit="cover"
        />
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
    </MainContainer>
  );
};

export default Home;

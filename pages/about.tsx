import { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Back, Landing, MainContainer, Title } from '../styles/components/about';

import { BsChevronCompactLeft } from 'react-icons/bs';

import sectionDataAbout from '../assets/sectionAboutData';
import SectionAbout from '../components/SectionAbout';

const About: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const image = document.querySelector('#Landing img') as HTMLImageElement
    const text = document.querySelector('#Landing p') as HTMLParagraphElement

    if(!image) return

    const scrollTransform = () => {
      image.style.transform = `scale(${window.scrollY / 1000 + 1})`;
      text.style.transform = `translateY(${-window.scrollY / 2}px)`;
      text.style.opacity = `${1 - window.scrollY / 250}`;
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
        <title>About</title>
        <meta name="description" content="Luxury Mountain Lodges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Back onClick={() => router.push('/')}>
        <BsChevronCompactLeft />
        Back
      </Back>

      <Landing id="Landing">
        <Image src={'/images/about/landing.jpg'} layout="fill" alt="about" objectFit='cover' objectPosition={'0% 70%'}/>
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
    </MainContainer>
  );
};

export default About;

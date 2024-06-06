import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';

import '../styles/datePicker.css';
import '../styles/loader.css';
import GlobalStyle from '../styles/globalStyle';
import Loader from '../components/Loader';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      <Head>
        <meta property="og:title" content="Luxury Mountain Lodges"></meta>
        <meta
          property="og:description"
          content="Book a Luxury Mountain Lodge. Choose from dozens beautiful places."
        />
        <meta property="og:url" content="https://luxurylodges.com" />
        <meta property="og:site_name" content="Luxury Mountain Lodges" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://luxury-mountains-lodges.vercel.app/icon.png"
        />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luxury Mountain Lodges" />
        <meta
          name="twitter:description"
          content="Book a Luxury Mountain Lodge. Choose from dozens beautiful places."
        />
        <meta
          name="twitter:image"
          content="https://luxury-mountains-lodges.vercel.app/icon.png"
        />
        <meta name="twitter:image:width" content="200" />
        <meta name="twitter:image:height" content="200" />
      </Head>
      {!loading ? (
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyApp;

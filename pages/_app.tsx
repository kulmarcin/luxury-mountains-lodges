import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';

import '../styles/datePicker.css';
import '../styles/loader.css';
import GlobalStyle from '../styles/globalStyle';
import Loader from '../components/Loader';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
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

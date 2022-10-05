import type { AppProps } from 'next/app';

import '../styles/datePicker.css'
import '../styles/loader.css'
import GlobalStyle from '../styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

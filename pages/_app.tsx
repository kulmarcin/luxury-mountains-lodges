import type { AppProps } from 'next/app';

import FixedMenu from '../components/FixedMenu';
import GlobalStyle from '../styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FixedMenu />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

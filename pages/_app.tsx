import '../styles/globals.css';
import '../styles/main.scss';
import '../styles/aos.scss';
import type { AppProps } from 'next/app';
import Overlay from '@components/global/Overlay';
import NextNprogress from 'nextjs-progressbar';
import { colors } from '@styles';
import AOS from 'aos';
import { useEffect } from 'react';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      // disable: 'phone',
      easing: 'ease-in-out',
      once: true,
      // duration: 600,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <NextNprogress
        color={colors.color6}
        options={{
          easing: 'ease',
          speed: 500,
          showSpinner: false,
        }}
      />
      {process.env.NODE_ENV === 'development' && <Overlay />}
      <Component {...pageProps} />
    </>
  );
}

export default App;

import '../styles/globals.css';
import '../styles/main.scss';
import type { AppProps } from 'next/app';
import Overlay from '@components/global/Overlay';
import NextNprogress from 'nextjs-progressbar';
import { colors } from '@styles';

function App({ Component, pageProps }: AppProps) {
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

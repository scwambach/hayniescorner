import '../styles/globals.css';
import '../styles/main.scss';
import type { AppProps } from 'next/app';
import Overlay from '@components/global/Overlay';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NODE_ENV === 'development' && <Overlay />}
      <Component {...pageProps} />
    </>
  );
}

export default App;

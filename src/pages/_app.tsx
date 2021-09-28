import type { AppProps } from 'next/app';
import { Navigation } from '../components/Navigation';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />;
    </>
  )
}
export default MyApp;

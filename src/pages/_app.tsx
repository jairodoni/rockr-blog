import '../styles/global.scss';
import type { AppProps } from 'next/app';
import { Navigation } from '../components/Navigation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />;
    </>
  )
}
export default MyApp;

import { useEffect } from 'react';
import '../styles/globals.css';
import GoogleAnalytics from '@/lib/GA';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <GoogleAnalytics/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
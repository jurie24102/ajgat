// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initGA, logPageView } from '../lib/gtag';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    initGA();
    logPageView();
    router.events.on('routeChangeComplete', logPageView);
    return () => {
      router.events.off('routeChangeComplete', logPageView);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;

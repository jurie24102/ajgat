import { useEffect } from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-VS3C2VKRTK');
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-VS3C2VKRTK`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VS3C2VKRTK');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
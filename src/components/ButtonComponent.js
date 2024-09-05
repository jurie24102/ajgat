import { useEffect } from 'react';

const handleClick = () => {
  window.gtag('event', 'button_click', {
    event_category: 'button',
    event_label: 'cta_button',
  });
};

function ButtonComponent() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
  }, []);

  return <button onClick={handleClick}>Click Me</button>;
}

export default ButtonComponent;
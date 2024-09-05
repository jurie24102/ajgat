import { useEffect } from 'react';

const handleClick = () => {
  window.gtag('event', 'form_button_click', {
    event_category: 'button',
    event_label: 'form_button',
  });
};

function ButtonComponent() {
  
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-VS3C2VKRTK');
  }, []);

  return <button onClick={handleClick}>Click Me</button>;
}

export default ButtonComponent;
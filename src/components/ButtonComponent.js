import { useEffect } from 'react';

const handleClick = () => {
  window.gtag('event', 'button_click', {
    event_category: 'button',
    event_label: 'cta_button',
  });
};

function ButtonComponent() {
  return <button onClick={handleClick}>Click Me</button>;
}

export default ButtonComponent;
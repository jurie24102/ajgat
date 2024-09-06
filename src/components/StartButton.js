import { Button } from '@mui/material';
import { useEffect } from 'react';

const StartButton = () => {

  const handleClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'Index Start Button Click', {
        event_category: 'Index Page',
        event_label: 'Index Start Button',
        value: 'Pressed Start'
      });
    }
  };
    const handleClick2 = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'Index Start Button Click', {
        event_category: 'Index Page2',
        event_label: 'Index Start Button',
        value: 'Pressed Start'
      });
    }
  };

  return <><Button sx={{ mt: 3 }} onClick={handleClick} variant="contained">Start</Button><Button sx={{ mt: 3 }} onClick={handleClick2} variant="contained">Start2</Button></>;
};

export default StartButton;

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';



function StartButton() {

const handleClick = () => {
    gaEvent({
      action: 'Pressed Start',
      category: 'Index Page',
      label: 'Index Start Button',
    })
};
  
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-VS3C2VKRTK');
  }, []);

  return <Button sx={{mt: 3}} onClick={handleClick} variant="contained">Start</Button>;
}

export default StartButton;
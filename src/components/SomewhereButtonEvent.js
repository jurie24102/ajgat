import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';



function SomewhereButtonEvent() {

const router = useRouter();

const handleClick = () => {
  window.gtag('event', 'somewhere_button_click', {
    event_category: 'button',
    event_label: 'somewhere_button',
  });
  router.push("/somewhere")
};
  
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-VS3C2VKRTK');
  }, []);

  return <Button sx={{mt: 3}} onClick={handleClick} variant="contained">Go Somewhere</Button>;
}

export default SomewhereButtonEvent;
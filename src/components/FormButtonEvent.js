import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';



function FormButtonEvent() {

const router = useRouter();

const handleClick = () => {
  window.gtag('event', 'form_button_click', {
    event_category: 'button',
    event_label: 'form_button',
  });
  router.push("/form")
};
  
  return <Button sx={{mt: 3}} onClick={handleClick} variant="contained">Fill In A form</Button>;
}

export default FormButtonEvent;
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import gaEvent from '@/lib/gaEvent';


function SomewhereButtonEvent() {

const router = useRouter();

const handleClick = () => {
  gaEvent({
      category: 'Routing',
      action: 'Clicked on the "Somewhere" button',
      label: 'Route to somewhere',
      value: 1
    });
  router.push("/somewhere")
};
  
  return <Button sx={{mt: 3}} onClick={handleClick} variant="contained">Go Somewhere</Button>;
}

export default SomewhereButtonEvent;
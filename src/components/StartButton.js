import { Button } from '@mui/material';

const StartButton = () => {

  const handleClick = (buttonNum) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'Index Start Button Click', {
        event_category: buttonNum === 'button1' ? 'Index Page' : 'Index Page2',
        event_label: 'Index Start Button',
        value: 'Pressed Start'
      });
    }
  };

  return (
    <>
      <Button sx={{ mt: 3 }} onClick={() => handleClick('button1')} variant="contained">
        Start
      </Button>
      <Button sx={{ mt: 3 }} onClick={() => handleClick('button2')} variant="contained">
        Start2
      </Button>
    </>
  );
};

export default StartButton;

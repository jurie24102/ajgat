import { useState, useEffect } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';

function UserColor() {
  const [username, setUsername] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFavoriteColorChange = (event) => {
    setFavoriteColor(event.target.value);
  };

  const handleClick = () => {
    if (username) {
      window.gtag('set', 'user_properties', {
        'user_favorite_color': `${username}'s favorite color is ${favoriteColor}`,
      });
    } else {
      alert('Please enter a username.');
    }
  };

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-VS3C2VKRTK');
  }, []);

  return (
    <Container maxWidth="sm">
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
        />
        <TextField
          label="Favorite Color"
          variant="outlined"
          value={favoriteColor}
          onChange={handleFavoriteColorChange}
          placeholder="Enter your favorite color"
        />
        <Button variant="contained" color="primary" onClick={handleClick}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default UserColor;

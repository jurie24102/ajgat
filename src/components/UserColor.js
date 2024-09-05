import { useState, useEffect } from 'react';

function UserColor() {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleClick = () => {
    if (username) {
      window.gtag('set', 'user_properties', {
        'favorite_color': 'pink',
        'username': username, // Send the username to GA4
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
    <div>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
          />
        </label>
      </form>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default UserColor;

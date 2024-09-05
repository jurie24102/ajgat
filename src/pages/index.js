import { useState } from 'react';

export default function ProfessionForm() {
  const [profession, setProfession] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send profession to Google Analytics 4 as a user property
    window.gtag('set', 'user_properties', {
      profession: profession,
    });

    // Optional: Reset the form or perform other actions
    setProfession('');
    alert('Profession sent to GA4!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="profession">Your Profession:</label>
      <input
        type="text"
        id="profession"
        name="profession"
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

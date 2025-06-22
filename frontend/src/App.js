import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');
  
  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage("Error: " + err.message));
  }, []);

  // Replace this with your desired coordinates or address
  const latitude = 53.3498;  // Dublin, Ireland
  const longitude = -6.2603;

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={openGoogleMaps}>Go to Location</button>
    </div>
  );
}

export default App;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const locations = ['dublin', 'nyc', 'tokyo'];

function Home() {
  const navigate = useNavigate();

  const goToLocation = (loc) => {
    navigate(`/map/${loc}`);
  };

  return (
    <div>
      <h1>Select a Location</h1>
      {locations.map(loc => (
        <button key={loc} onClick={() => goToLocation(loc)}>
          {loc.charAt(0).toUpperCase() + loc.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Home;

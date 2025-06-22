import React from 'react';
import { useNavigate } from 'react-router-dom';

const locations = ['dublin', 'nyc', 'tokyo'];

function Home() {
  const navigate = useNavigate();

  const goToLocation = (loc) => {
    navigate(`/map/${loc}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Select a Location</h1>
      <div className="flex flex-col gap-4">
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => goToLocation(loc)}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition duration-200 ease-in-out text-lg font-medium"
          >
            {loc.charAt(0).toUpperCase() + loc.slice(1)}
          </button>

          
        ))}

        <h2>BONUS TOURS</h2>
            <button onClick={() => navigate("/ulysses/0")}>
            📚 Ulysses Street-View Tour
        </button>

      </div>
    </div>
  );
}

export default Home;

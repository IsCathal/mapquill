import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

console.log("Google Maps API Key:", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);


const containerStyle = {
  width: '100%',
  height: '500px'
};

const locationCoords = {
  dublin: { lat: 53.3498, lng: -6.2603 },
  nyc: { lat: 40.7128, lng: -74.0060 },
  tokyo: { lat: 35.6762, lng: 139.6503 }
};

function MapPage() {
  const { location } = useParams();
  const coords = locationCoords[location] || locationCoords.dublin;
  const [center] = useState(coords);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div>
      <h2>Map: {location.toUpperCase()}</h2>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      />
    </div>
  );
}

export default MapPage;

import React, { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GoogleMap, StreetViewPanorama, useLoadScript } from "@react-google-maps/api";
import { ulyssesStops } from "../ulyssesStops";

const containerStyle = { width: "100%", height: "100vh" };

export default function UlyssesTour() {
  const { id }      = useParams();            // current stop as string
  const startIndex  = Number(id) || 0;
  const [idx, setIdx] = useState(startIndex);
  const nav         = useNavigate();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const stop = ulyssesStops[idx] || ulyssesStops[0];

  const goto = useCallback((nextIdx) => {
    setIdx(nextIdx);
    nav(`/ulysses/${nextIdx}`, { replace: true }); // keeps URL in sync
  }, [nav]);

  if (!isLoaded) return <p>Loading Google Maps…</p>;

  return (
    <>
      <header style={{ position: "absolute", top: 10, right: 10, zIndex: 10 }}>
        <h2>{stop.name}</h2>
        <button disabled={idx === 0}              onClick={() => goto(idx - 1)}>◀ Prev</button>
        <button disabled={idx === ulyssesStops.length - 1} onClick={() => goto(idx + 1)}>Next ▶</button>
        <button onClick={() => nav("/")}>Back to index</button>
      </header>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: stop.lat, lng: stop.lng }}
        zoom={14}
        options={{ disableDefaultUI: true }}>  {/* optional */}
        
        <StreetViewPanorama
          position={{ lat: stop.lat, lng: stop.lng }}
          visible={true}
          options={{ pov: { heading: 0, pitch: 0 } }}
        />
      </GoogleMap>
    </>
  );
}

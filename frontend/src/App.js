import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import UlyssesTour from "./pages/UlyssesTour";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map/:location" element={<MapPage />} />
        <Route path="/ulysses/:id"  element={<UlyssesTour />} />
      </Routes>
    </Router>
  );
}

export default App;

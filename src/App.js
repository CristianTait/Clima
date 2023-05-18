import { useState } from 'react';
import LocationSearch from './components/LocationSearch';
import WeatherDisplay from './components/WeatherDisplay';
import React from 'react';
import './index.css';

function App() {
  const [location, setLocation] = useState('');

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <div>
      <h1 className="text-center">Aplicación de Clima</h1>
      <LocationSearch onLocationChange={handleLocationChange} />
      <WeatherDisplay location={location} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import LocationSearch from './components/LocationSearch';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [location, setLocation] = useState('');

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <div>
      <h1>Aplicación de Clima</h1>
      <LocationSearch onLocationChange={handleLocationChange} />
      <WeatherDisplay location={location} />
    </div>
  );
}

export default App;
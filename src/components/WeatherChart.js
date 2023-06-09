import React, { useEffect, useState } from 'react';
import axios from 'axios';


function WeatherDisplay({ location }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = 'APY_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        setWeatherData(data);
      } catch (error) {
        console.error('Error al obtener los datos del clima:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Weather Display for {location}</h2>
      {/* Aquí se muestra la información del clima actual para la ubicación especificada */}
      {weatherData && (
        <div style={{ marginTop: '20px' }}>
          <p>Temperature: {weatherData.temperature}</p>
          <p>Description: {weatherData.description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherDisplay;

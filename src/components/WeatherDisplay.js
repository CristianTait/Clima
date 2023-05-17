import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherDisplay({ location }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = '143eebf1a5d27a3d640a1481e41a204a';
    
    if (location) {
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
    }
  }, [location]);

  return (
    <div>
      <h2>Weather Display for {location}</h2>
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherDisplay;
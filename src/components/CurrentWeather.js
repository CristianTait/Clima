import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CurrentWeather = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = '143eebf1a5d27a3d640a1481e41a204a';
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
    <div>
      <h2>Clima actual en {location}</h2>
      {weatherData && (
        <>
          <p>Temperatura: {weatherData.temperature}</p>
          <p>Descripción: {weatherData.description}</p>
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
export { CurrentWeather};
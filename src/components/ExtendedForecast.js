import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExtendedForecast = ({ forecastData }) => {
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
    <div>
      <h2>Pronóstico extendido</h2>
      {forecastData.map((day) => (
        <div key={day.date}>
          <p>{day.date}</p>
          <p>Temperatura máxima: {day.maxTemperature}</p>
          <p>Temperatura mínima: {day.minTemperature}</p>
        </div>
      ))}
    </div>
  );
};

export default ExtendedForecast;

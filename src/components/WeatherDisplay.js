import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherDisplay({ location }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
     const apiKey = 'APY_KEY';
    
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
    div className="container mt-4  clima">
      <h2 className="mb-4">Clima actual en {location}</h2>
      {weatherData && (
        <div className="card p-4">
          <p className="mb-2">
            <FaTemperatureHigh className="temperature-icon" /> Temperatura: {weatherData.main.temp}
          </p>
          <p className="mb-2">
            <FaSun className="sun-icon" /> Descripción: {weatherData.weather[0].description}
          </p>
          <p className="mb-2">
            <FaWater className="humidity-icon" /> Humedad: {weatherData.main.humidity}%
          </p>
          <p className="mb-2">
            <FaWind className="wind-icon" /> Velocidad del viento: {weatherData.wind.speed} m/s
          </p>
          <p className="mb-2">
            <FaTachometerAlt className="pressure-icon" /> Presión: {weatherData.main.pressure} hPa
          </p>
          <p className="mb-2">
            <FaClock className="sunrise-icon" /> Amanecer: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
          </p>
          <p className="mb-2">
            <FaClock className="sunset-icon" /> Atardecer: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
          </p>
        </div>
      )}
    </div>
  );
}

export default WeatherDisplay;

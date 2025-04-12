import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '400px',
        margin: '0 auto',
        backgroundColor: '#f0f8ff',
      }}
    >
      <h2>{weather.city}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt="weather-icon"
      />
      <p><strong>Temperature:</strong> {weather.temperature}°C</p>
      <p><strong>Condition:</strong> {weather.condition}</p>
      <p><strong>Humidity:</strong> {weather.humidity}%</p>
      <p><strong>Wind Speed:</strong> {weather.windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;

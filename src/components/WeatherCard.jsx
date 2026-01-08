import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div>
      <h2>{weather.name}</h2>
      <p>🌡️ {weather.main.temp}°C</p>
      <p>☁️ {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;

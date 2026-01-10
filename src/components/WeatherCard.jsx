import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="mt-4 rounded-lg bg-[rgb(var(--color-card))] shadow p-4">
      <h2>{weather.name}</h2>
      <p>🌡️ {weather.main.temp}°C</p>
      <p>☁️ {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;

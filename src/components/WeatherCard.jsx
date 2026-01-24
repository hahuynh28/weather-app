import React from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  function getWeatherIcon(code) {
    if (code === 0) return "☀️";
    if ([1, 2, 3].includes(code)) return "☁️";
    if (code >= 51 && code <= 67) return "🌧️";
    if (code >= 71 && code <= 77) return "❄️";
    return "🌤️";
  }

  const temp = Math.round(weather.main.temp);
  const desc = weather.weather?.[0]?.description;

  return (
    <div className="flex flex-col items-center text-center gap-3">
      {/* Location name with icon */}
      <div className="flex items-center gap-2 text-lg font-medium">
        <MapPin className="h-5 w-5" />
        <span>{weather.name}</span>
      </div>
      {/* Main temperature display */}
      <p className="text-7xl font-semibold tracking-tight drop-shadow">
        {temp}°C
      </p>

      <p className="text-5xl">{getWeatherIcon(weather.weathercode)}</p>

      {/* Weather description */}
      <p className="text-sm text-white/70 mt-1">{desc}</p>
    </div>
  );
};

export default WeatherCard;

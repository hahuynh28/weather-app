import React from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const temp = Math.round(weather.main.temp);
  const desc = weather.weather?.[0]?.description;

  return (
    <div className="flex flex-col items-center text-center gap-3 mb-14">
      <div className="flex items-center gap-2 text-lg font-medium">
        <MapPin className="h-5 w-5" />
        <span>{weather.name}</span>
      </div>

      <p className="text-7xl font-semibold tracking-tight">{temp}°C</p>

      <p className="text-lg capitalize text-muted-foreground">{desc}</p>
    </div>
  );
};

export default WeatherCard;

import React from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { formatDate } from "@/lib/formatDate";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const dateString = formatDate(weather.dt);
  const temperatureC = Math.round(weather.main.temp);

  return (
    <div className="mt-4 rounded-lg bg-[rgb(var(--color-card))] shadow p-4">
      <Badge variant="secondary" className="flex w-fit items-center gap-1">
        <MapPin className="h-4 w-4" />
        {weather.name}
      </Badge>

      <p className="text-sm text-muted-foreground">
        {weather?.dt && formatDate(weather.dt)}
      </p>

      <p className="text-3x1 font-semibold">{temperatureC}°C</p>

      <p className="text-sm capitalize text-muted-foreground">
        {weather.weather[0].description}
      </p>
    </div>
  );
};

export default WeatherCard;

import React from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const temperatureC = Math.round(weather.main.temp);

  return (
    <div className="mt-4 rounded-lg bg-[rgb(var(--color-card))] shadow p-4">
      <div className="grid grid-cols-2 gap-6 items-center">
        {/* LEFT */}
        <div>
          <Badge
            variant="secondary"
            className="flex w-fit items-center gap-2 text-base font-semibold px-1 py-1 mb-4"
          >
            <MapPin className="h-5 w-5" />
            {weather.name}
          </Badge>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-end gap-1">
          <p className="text-3xl font-semibold">{temperatureC}°C</p>

          <p className="text-sm capitalize text-muted-foreground">
            {weather.weather[0].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

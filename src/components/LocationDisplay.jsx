import React from "react";
import EmptyState from "./EmptyState";
import WeatherCard from "./WeatherCard";
import WeatherSkeleton from "./WeatherSkeleton";

const LocationDisplay = ({ weather, loading, error }) => {
  if (loading) {
    return <WeatherSkeleton />;
  }

  if (error) {
    return (
      <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-center text-red-600">
        {error}
      </div>
    );
  }

  if (!weather) {
    return <EmptyState />;
  }

  return <WeatherCard weather={weather} />;
};

export default LocationDisplay;

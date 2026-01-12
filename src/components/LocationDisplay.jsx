import React from "react";
import EmptyState from "./EmptyState";
import Spinner from "./Spinner";
import WeatherCard from "./WeatherCard";

const LocationDisplay = ({ weather, loading, error }) => {
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p className="mt-4 text-center text-red-500">{error}</p>;
  }

  if (!weather) {
    return <EmptyState />;
  }

  return <WeatherCard weather={weather} />;
};

export default LocationDisplay;

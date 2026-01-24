import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import { fetchWeatherData } from "./services/weatherApi";
import LocationDisplay from "./components/LocationDisplay";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const temp = weather?.main?.temp;
  const isWarm = temp > 15;

  async function handleSearch(city) {
    try {
      setError("");
      setLoading(true);

      const data = await fetchWeatherData(city);
      setWeather(data);
      localStorage.setItem("lastCity", city);
    } catch (error) {
      if (error.message === "city_not_found") {
        setError("City not found. Please check the spelling.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
      handleSearch(lastCity);
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Cold background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900 via-slate-800 to-slate-900" />

      {/* Warm background */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-orange-400 via-rose-500 to-rose-600
        transition-opacity duration-700 ease-in-out
        ${isWarm ? "opacity-100" : "opacity-0"}
      `}
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center">
        <div className="mt-10 opacity-90">
          <SearchBox onSearch={handleSearch} disabled={loading} />
        </div>

        <div className="flex flex-1 items-center justify-center">
          <LocationDisplay weather={weather} loading={loading} error={error} />
        </div>
      </div>
    </div>
  );
}

export default App;

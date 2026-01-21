import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import { fetchWeatherData } from "./services/weatherApi";
import LocationDisplay from "./components/LocationDisplay";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="mt-8">
        <SearchBox onSearch={handleSearch} disabled={loading} />
      </div>

      <div className="flex flex-1 items-center justify-center">
        <LocationDisplay weather={weather} loading={loading} error={error} />
      </div>
    </div>
  );
}

export default App;

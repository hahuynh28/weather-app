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
    <div className="min-h-screen bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))]">
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Weather App</h1>
        <SearchBox onSearch={handleSearch} disabled={loading} />

        <LocationDisplay weather={weather} loading={loading} error={error} />
      </div>
    </div>
  );
}

export default App;

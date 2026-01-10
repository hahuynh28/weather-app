import { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import { fetchWeatherData } from "./services/weatherApi";
import Spinner from "./components/Spinner";

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
    } catch (error) {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))]">
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Weather App</h1>
        <SearchBox onSearch={handleSearch} disabled={loading} />
        {loading && <Spinner />}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;

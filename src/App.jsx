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
    <div>
      <h1>Weather App</h1>
      <SearchBox onSearch={handleSearch} disabled={loading} />
      {loading && <Spinner />}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;

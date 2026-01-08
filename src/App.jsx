import { useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import { fetchWeatherData } from "./services/weatherApi";

function App() {
  const [weather, setWeather] = useState(null);

  async function handleSearch(city) {
    try {
      const data = await fetchWeatherData(city);
      setWeather(data);
    } catch (error) {
      alert("City not found");
    }
  }

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBox onSearch={handleSearch} />
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;

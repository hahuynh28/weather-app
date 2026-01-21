export const fetchWeatherData = async (city) => {
  const geoRes = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`,
  );
  const geoData = await geoRes.json();

  if (!geoData.results) {
    throw new Error("City not found");
  }

  const { latitude, longitude, name } = geoData.results[0];

  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
  );
  const weatherData = await weatherRes.json();

  return {
    name,
    main: {
      temp: weatherData.current_weather.temperature,
    },
    weather: [
      {
        description: `Wind ${weatherData.current_weather.windspeed} km/h`,
      },
    ],
  };
};

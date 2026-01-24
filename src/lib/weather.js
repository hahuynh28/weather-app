export function getWeatherIcon(code) {
  if (code === 0) return "☀️";
  if ([1, 2, 3].includes(code)) return "☁️";
  if (code >= 51 && code <= 67) return "🌧️";
  if (code >= 71 && code <= 77) return "❄️";
  return "🌤️";
}

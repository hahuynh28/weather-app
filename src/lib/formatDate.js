export function formatDate(timestamp) {
  if (!timestamp) return "";

  const date = new Date(timestamp * 1000);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

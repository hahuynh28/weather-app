import React from "react";

const EmptyState = ({ weather, loading, error }) => {
  if (weather || loading || error) return null;

  return (
    <div className="mt-10 text-center text-slate-500">
      <p className="text-lg">🔍 Search for a city to see the weather</p>
      <p className="text-sm mt-1">Try: Toronto, Vancouver, Ottawa</p>
    </div>
  );
};

export default EmptyState;

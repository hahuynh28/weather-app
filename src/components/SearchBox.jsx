import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SearchBox = ({ onSearch, disabled }) => {
  const [city, setCity] = useState("");

  return (
    <div className="flex gap-2 mb-14">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        disabled={disabled}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(city);
          }
        }}
        className="flex-1 border border-[rgb(var(--border))] px-3 py-2 rounded"
      />
      <Button disabled={disabled} onClick={() => onSearch(city)}>
        Search
      </Button>
    </div>
  );
};

export default SearchBox;

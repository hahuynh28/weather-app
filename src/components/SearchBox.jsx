import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SearchBox = ({ onSearch, disabled }) => {
  const [city, setCity] = useState("");

  return (
    <div className="flex gap-2">
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
        className="h-11 flex-1 border px-3 rounded bg-white text-black placeholder:text-gray-400"
      />
      <Button
        className="h-11 bg-white text-black hover:bg-gray-200"
        disabled={disabled}
        onClick={() => onSearch(city)}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBox;

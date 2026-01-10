import React from "react";
import { Button } from "@/components/ui/button";

const SearchBox = ({ onSearch, disabled }) => {
  return (
    <div className="flex gap-2">
      <input
        placeholder="Enter city name"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(e.target.value);
          }
        }}
        disabled={disabled}
        className="flex-1 border border-[rgb(var(--border))] px-3 py-2 rounded"
      />
      <Button disabled={disabled}>Search</Button>
    </div>
  );
};

export default SearchBox;

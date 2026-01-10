import React from "react";

const SearchBox = ({ onSearch, disabled }) => {
  return (
    <div>
      <input
        placeholder="Enter city name"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(e.target.value);
          }
        }}
        disabled={disabled}
      />
      <button
        onClick={(e) => {
          const input = e.target.previousSibling.value;
          onSearch(input);
        }}
        disabled={disabled}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;

import React from "react";

const SearchBox = ({ onSearch }) => {
  return (
    <div>
      <input
        placeholder="Enter city name"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(e.target.value);
          }
        }}
      />
      <button
        onClick={(e) => {
          const input = e.target.previousSibling.value;
          onSearch(input);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;

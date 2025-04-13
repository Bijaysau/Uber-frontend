import React, { useState } from "react";

function LocationSearchPanel({ placeholder, onSelect }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const fetchSuggestions = async (value) => {
    setQuery(value);
    if (!value.trim()) {
      setSuggestions([]); // keep empty initially
      return;
    }

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
    );
    const data = await res.json();
    setSuggestions(data);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => fetchSuggestions(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 100)} // small delay for click
        className="bg-gray-200 px-4 py-3 text-lg rounded-md w-full"
      />

      {isFocused && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md rounded-md z-10 max-h-60 overflow-y-auto">
          {suggestions.length > 0 ? (
            suggestions.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setQuery(item.display_name);
                  setSuggestions([]);
                  onSelect({
                    lat: parseFloat(item.lat),
                    lng: parseFloat(item.lon),
                    label: item.display_name,
                  });
                }}
              >
                {item.display_name}
              </li>
            ))
          ) : (
            <li className="px-4 py-3 text-gray-500 text-center">
              No results found
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default LocationSearchPanel;

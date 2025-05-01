"use client";
import React, { useState } from "react";

const SearchBar = ({ onSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}&limit=100` //limit på 1000 syntax??? er searchbar brugervenlig?
    );
    const data = await response.json();
    onSearchResults(data.products);
  };

  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Search products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 py-3 px-6 border rounded-full bg-(--white) shadow-md"
      />
      <button
        onClick={handleSearch}
        className="py-3 px-6 bg-(--black) text-(--white) rounded-full hover:scale-105 transition-transform duration-300 shadow-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

"use client";
import { useState } from "react";
import ListCard from "./ListCard";
import SearchBar from "../Header/SearchBar";

const ListClient = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchResults, setSearchResults] = useState(null);

  const categories = data.products
    .map((p) => p.category)
    .filter((category, index, self) => self.indexOf(category) === index);

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setSelectedCategory("all");
  };

  const productsToDisplay = searchResults || data.products;

  const filteredProducts =
    selectedCategory === "all"
      ? productsToDisplay
      : productsToDisplay.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="grid gap-4">
      <div className="flex flex-end mb-5 justify-end">
        <SearchBar onSearchResults={handleSearchResults} />
      </div>

      <h2 className="font-bold">Categories</h2>
      <div className="flex gap-4 overflow-x-auto pb-4">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`italic whitespace-nowrap hover:underline ${
            selectedCategory === "all" ? "font-bold underline" : ""
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`italic whitespace-nowrap hover:underline ${
              selectedCategory === category ? "font-bold underline" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ListCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ListClient;

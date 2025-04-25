"use client";
import { useState } from "react";
import ListCard from "./ListCard";

const ListClient = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? data.products
      : data.products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <section className="grid gap-4">
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
        {[...new Set(data.products.map((p) => p.category))].map((category) => (
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

      <ul className="grid grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ListCard key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default ListClient;

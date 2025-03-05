import React, { useState } from "react";
import "./EventsFilter.css";

const categories = [
  "All",
  "Plantation day",
  "Annual day",
  "Sports day",
  "NCC (National cadet corps)",
  "Science labs",
  "Alumni association",
  "Cleanliness drive",
];

const EventsFilter = ({ setSelectedCategory }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSelectedCategory(category);
  };

  return (
    <div className="filter-container">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={activeCategory === category ? "active" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default EventsFilter;

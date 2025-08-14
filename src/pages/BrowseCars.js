import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import cars from "../data/Cars.js"; // Make sure this path is correct
import "../styles/BrowseCars.css"; // Keep your current CSS

function BrowseCars() {
  const [selectedType, setSelectedType] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [query, setQuery] = useState("");

  const categories = ["SUV", "Sedan", "Hatchback", "Convertible"];

  const filteredCars = useMemo(() => {
    let list = cars;

    // Filter by category
    if (selectedType) {
      list = list.filter((c) => c.category === selectedType);
    }

    // Search filter
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (c) =>
          c.brand.toLowerCase().includes(q) ||
          c.model.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortOption === "low-to-high")
      list = [...list].sort((a, b) => a.price - b.price);
    if (sortOption === "high-to-low")
      list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [selectedType, sortOption, query]);

  return (
    <div className="browse-page">
      <h1 className="page-title">Browse Cars</h1>

      {/* Search and Sort */}
      <div className="controls">
        <input
          className="search"
          placeholder="Search brand ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          className="select"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="low-to-high">Price: Low → High</option>
          <option value="high-to-low">Price: High → Low</option>
        </select>
      </div>

      {/* Category Filters */}
      <div className="category-tags">
        {categories.map((type) => (
          <button
            key={type}
            className={`category-tag${
              selectedType === type ? " active" : ""
            }`}
            onClick={() =>
              setSelectedType(selectedType === type ? "" : type)
            }
          >
            {type}
          </button>
        ))}
        {selectedType && (
          <button
            className="category-tag clear"
            onClick={() => setSelectedType("")}
          >
            Clear
          </button>
        )}
      </div>

      {/* Cars Grid */}
      <div className="car-grid">
        {filteredCars.map((car) => (
          <div className="card" key={car.id}>
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
            />
            <div className="card-body">
              <div className="card-title">
                {car.brand} {car.model}
              </div>
              <div className="card-sub">Category: {car.category}</div>
              <div className="price">
                KES {car.price.toLocaleString()}
              </div>
            </div>
            <div className="card-actions">
              <Link to={`/cars/${car.id}`} className="btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseCars;

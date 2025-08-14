import React from "react";
import "./CarFilters.css"; // Ensure this file exists and styles correctly
const CarFilters = ({
  types = [], // array of car types like SUV, Sedan, etc.
  selectedType = "",
  onTypeSelect = () => {},
  sortOption = "",
  onSort = () => {},
}) => {
  // You can also directly define the fixed types array instead of using props.types
  const predefinedTypes = ["SUV", "Sedan", "Hatchback", "Convertible"];
  const handleCategoryClick = (type) => {
    onTypeSelect(type); // this triggers the parent to filter cars
  };
  return (
    <div className="car-filters">
      {/* Browse by Category Buttons */}
      <div className="category-buttons" style={{ marginBottom: "1rem" }}>
        {predefinedTypes.map((type) => (
          <button
            key={type}
            className="px-4 py-2 border rounded-md hover:bg-gray-100 mr-2 mb-2"
            onClick={() => handleCategoryClick(type)}
          >
            {type}
          </button>
        ))}
      </div>
      {/* Dropdown Filters */}
      <div className="filter-group">
        <label htmlFor="type-select">Filter by Type:</label>
        <select
          id="type-select"
          value={selectedType}
          onChange={(e) => onTypeSelect(e.target.value)}
        >
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="sort-select">Sort by Price:</label>
        <select
          id="sort-select"
          value={sortOption}
          onChange={(e) => onSort(e.target.value)}
        >
          <option value="">None</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};
export default CarFilters;
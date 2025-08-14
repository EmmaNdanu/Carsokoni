import React, { useState } from "react";
import cars from "../data/Cars";
import CarCard from "../components/CarCard";
import CarFilters from "../car/CarFilters";

const CarList = () => {
  const [sortOption, setSortOption] = useState("");
  const [selectedType, setSelectedType] = useState("");

  // Handle sort option
  const handleSort = (option) => {
    setSortOption(option);
  };

  // Handle car type selection
  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  // Filter cars by type
  const filterCarsByType = (type) => {
    switch (type) {
      case "SUV":
        return cars.filter(
          (car) => car.brand === "Toyota" || car.brand === "Mazda"
        );
      case "Sedan":
        return cars.filter(
          (car) => car.brand === "Honda" || car.brand === "Nissan"
        );
      case "Convertible":
        return cars.filter((car) => car.brand === "BMW");
      case "Hatchback":
        return cars.filter((car) => car.brand === "Ford");
      default:
        return cars;
    }
  };

  // Sort the filtered cars
 const sortCars = (carsList) => {
  if (sortOption === "low-to-high") {
    return [...carsList].sort((a, b) => a.price - b.price);
  } else if (sortOption === "high-to-low") {
    return [...carsList].sort((a, b) => b.price - a.price);
  } else {
    return carsList;
  }
};
  const filteredCars = filterCarsByType(selectedType);
  const sortedCars = sortCars(filteredCars);
  return (
    <div>
      <h2>Available Cars</h2>
      <CarFilters
        types={["SUV", "Sedan", "Hatchback", "Convertible"]}
        searchTerm=""
        onSearch={() => {}}
        selectedType={selectedType}
        onTypeSelect={handleTypeSelect}
        sortOption={sortOption}
        onSort={handleSort}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {sortedCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;

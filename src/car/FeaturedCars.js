import React from "react";
import "./FeaturedCars.css";
const cars = [
  { id: 1, image :  process.env.PUBLIC_URL + "/images/toyota_corolla.jpeg", brand: "Toyota", model: "Corolla", price: "2800000" },
  { id: 2, image:  process.env.PUBLIC_URL + "/images/honda_civic.jpeg", brand: "Honda", model: "Civic", price: "2400000" },
  { id: 3, image: process.env.PUBLIC_URL + "/images/bmw_x5.jpeg", brand: "BMW", model: "X5", price: "3000000" },
  { id: 4, image:  process.env.PUBLIC_URL + "/images/nissan_altima.jpeg", brand: "Nissan", model: "Altima", price: "2300000" },
  { id: 5, image:  process.env.PUBLIC_URL + "/images/ford_mustang.jpeg", brand: "Ford", model: "Mustang", price: "2100000" },
  { id: 6, image: process.env.PUBLIC_URL + "/images/mazda_cx5.jpeg", brand: "Mazda", model: "CX-5", price: "4500000" }
];
function FeaturedCars() {
  return (
    <section className="car-grid">
      {cars.map((car) => (
        <div className="car-card" key={car.id}>
          <img src={car.image} alt={`${car.brand} ${car.model}`} />
          <h3>{car.brand} {car.model}</h3>
          <p>{car.price}</p>
        </div>
      ))}
    </section>
  );
}
export default FeaturedCars;
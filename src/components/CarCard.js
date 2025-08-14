import React from "react";
import "./CarCard.css";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
return (
<Link to={`/cars/${car.id}`} className="block border rounded-md p-4 hover:shadow-lg car-card">
<img src={car.image} alt={car.model} className="h-48 w-full object-cover mb-2 rounded" />
<h3 className="font-bold text-lg">{car.model}</h3>
<p className="text-gray-600">{car.brand}</p>
 <p className="text-green-600 font-semibold">Ksh {car.price.toLocaleString()}</p>
</Link>
);
};

export default CarCard;

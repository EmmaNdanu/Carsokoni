// src/components/CarListPage.js

import React from 'react';
import CarCard from './CarCard';
import carsData from '../data/cars.json';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedType } from '../redux/carFilterSlice';

const CarListPage = () => {
const dispatch = useDispatch();
const selectedType = useSelector((state) => state.carFilter.selectedType);
const handleCategoryClick = (type) => {
dispatch(setSelectedType(type));
};
const filteredCars = selectedType
? carsData.filter((car) => car.type === selectedType)
: carsData;
return (
<div className="container mx-auto px-4 py-6">
 <h2 className="text-2xl font-semibold mb-4">Browse by Category</h2>
<div className="flex gap-3 mb-6">
{["SUV", "Sedan", "Hatchback", "Convertible"].map((type) => (
<button
 key={type}
className={`px-4 py-2 border rounded-md ${
selectedType === type ? 'bg-black text-white' : 'hover:bg-gray-100'
}`}
onClick={() => handleCategoryClick(type)}
>
{type}
</button>
))}
</div>
<div className="grid md:grid-cols-3 gap-6">
{filteredCars.map((car) => (
<CarCard key={car.id} car={car} />
))}
 </div>
</div>
);
};
export default CarListPage;
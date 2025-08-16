const cars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    price: 2800000,
    image: process.env.PUBLIC_URL + "/images/toyota_corolla.jpeg",
    category: "SUV",
    specifications: {
      engine: "1.8L 4-Cylinder",
      transmission: "CVT",
      fuelType: "Petrol",
      mileage: "16 km/l",
      seatingCapacity: 5,
      color: "Silver"
    },
    financing: "Flexible financing available. Contact us for options."
  },
  {
    id: 2,
    brand: "Honda",
    model: "Civic",
    price: 2400000,
    image: process.env.PUBLIC_URL + "/images/honda_civic.jpeg",
    category: "Sedan",
    specifications: {
      engine: "2.0L 4-Cylinder",
      transmission: "Manual",
      fuelType: "Petrol",
      mileage: "14 km/l",
      seatingCapacity: 5,
      color: "White"
    },
    financing: "Financing plans available. Ask our sales team."
  },
  {
    id: 3,
    brand: "BMW",
    model: "X5",
    price: 3000000,
    image: process.env.PUBLIC_URL + "/images/bmw_x5.jpeg",
    category: "Convertible",
    specifications: {
      engine: "3.0L 6-Cylinder",
      transmission: "Automatic",
      fuelType: "Diesel",
      mileage: "12 km/l",
      seatingCapacity: 5,
      color: "Black"
    },
    financing: "Premium financing available. Contact sales for details."
  },
  {
    id: 4,
    brand: "Nissan",
    model: "Altima",
    price: 2300000,
    image: process.env.PUBLIC_URL + "/images/nissan_altima.jpeg",
    category: "Sedan",
    specifications: {
      engine: "2.5L 4-Cylinder",
      transmission: "CVT",
      fuelType: "Petrol",
      mileage: "15 km/l",
      seatingCapacity: 5,
      color: "Blue"
    },
    financing: "Flexible monthly installments available."
  },
  {
    id: 5,
    brand: "Ford",
    model: "Mustang",
    price: 2100000,
    image: process.env.PUBLIC_URL + "/images/ford_mustang.jpeg",
    category: "Hatchback",
    specifications: {
      engine: "5.0L V8",
      transmission: "Manual",
      fuelType: "Petrol",
      mileage: "10 km/l",
      seatingCapacity: 4,
      color: "Red"
    },
    financing: "Financing available for all models."
  },
  {
    id: 6,
    brand: "Mazda",
    model: "CX-5",
    price: 4500000,
    image: process.env.PUBLIC_URL + "/images/mazda_cx5.jpeg",
    category: "SUV",
    specifications: {
      engine: "2.5L 4-Cylinder",
      transmission: "Automatic",
      fuelType: "Petrol",
      mileage: "14 km/l",
      seatingCapacity: 5,
      color: "Grey"
    },
    financing: "Contact us for flexible payment plans."
  },
];

export default cars;

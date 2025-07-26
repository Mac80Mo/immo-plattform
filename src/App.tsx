import React from 'react';
import './App.css';

import { Property, PropertyType } from './models/property';
import PropertyCard from './components/PropertyCard';

function App() {

  const house: Property = {
    id: 0,
    title: "Great new house",
    description: "This is a great house",
    price: 500000,
    address: {
      street: "123 Main St",
      city: "Anytown",
      postcode: "12345",
      country: "Countryland"
    },
    property_type: PropertyType.APPARTMENT,
    imageUrl: "https://example.com/house-image.jpg"
  };

  const flat: Property = {
    id: 1,
    title: "Great new flat",
    description: "This is a great house",
    price: 400000,
    address: {
      street: "124 Main St",
      city: "Anytown",
      postcode: "12345",
      country: "Countryland"
    },
    property_type: PropertyType.APPARTMENT,
    imageUrl: "https://example.com/house-image.jpg"
  };

  const properties: Property[] = [house, flat]

  return (
    <div className="App">
      {properties.map((house) => (
        <>
        <PropertyCard property={house} />
        </>  
      ))}
    </div>
  );
}

export default App;

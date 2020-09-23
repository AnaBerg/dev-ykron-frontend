import React from 'react';
import './CarCard.css';

function CarCard({ onClick, name, brand, year, id }) {
  return (
    <button type="button" className="car-card" onClick={() => onClick(id)}>
      <h3 className="car-card-brand-text">{name}</h3>
      <p className="car-card-model-text">{brand}</p>
      <p className="car-card-year-text">{year}</p>
    </button>
  );
}

export default CarCard;

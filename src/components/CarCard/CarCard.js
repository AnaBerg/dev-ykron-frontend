import React from 'react';
import './CarCard.css';

function CarCard({ onClick, name, brand, year, id }) {
  return (
    <button
      type="button"
      className="car-list-contant"
      onClick={() => onClick(id)}
    >
      <h3 className="car-list-brand-text">{name}</h3>
      <p className="car-list-model-text">{brand}</p>
      <p className="car-list-year-text">{year}</p>
    </button>
  );
}

export default CarCard;

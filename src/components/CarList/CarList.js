import React, { useCallback, useState } from 'react';
import './CarList.css';

import CarSpecs from '../CarSpecs';
import CarCard from '../CarCard';

const carDescription = [
  {
    name: 'Palio top',
    brand: 'Fiat',
    year: 2016,
    sold: false,
    description: 'alo baia',
  },
];

function CarList() {
  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState({});

  const handleCarClick = useCallback((id) => {
    setOpen(true);
    const car = carDescription.find((_, index) => index === id);
    setSelectedCar(car);
  }, []);

  return (
    <>
      <div className="car-list-container">
        <h3 className="car-list-text">Lista de Carros</h3>
        {carDescription.map((car, index) => (
          <CarCard {...car} id={index} key={index} onClick={handleCarClick} />
        ))}
      </div>

      {open && <CarSpecs {...selectedCar} />}
    </>
  );
}

export default CarList;

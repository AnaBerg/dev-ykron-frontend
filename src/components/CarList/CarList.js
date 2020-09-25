import React, { useCallback } from 'react';
import './CarList.css';

import CarSpecs from '../CarSpecs';
import CarCard from '../CarCard';

function CarList({ selected, selectCar, carList, setEdit, handleList }) {
  const handleCarClick = useCallback(
    (id) => {
      const car = carList[id];
      selectCar({ ...car, id });
    },
    [carList, selectCar]
  );

  return (
    <>
      <div className="car-list-container">
        <h3 className="car-list-text">Lista de Carros</h3>
        {carList.map((car, index) => (
          <CarCard
            {...car}
            id={index}
            key={index}
            onClick={handleCarClick}
            isActive={selected?.id === index}
          />
        ))}
      </div>

      {selected && (
        <CarSpecs {...selected} setEdit={setEdit} handleList={handleList} />
      )}
    </>
  );
}

export default CarList;

import React, { useState, useCallback } from 'react';
import './LandingPage.css';

import CarList from '../CarList';
import NewCar from '../NewCar';

import carIcon from '../../images/icons/car-icon.svg';
import magnifyingGlassIcon from '../../images/icons/magnifying-glass-icon.svg';
import plusIcon from '../../images/icons/plus-icon.svg';

const carDescription = [];

function LandingPage() {
  const [list, setList] = useState(carDescription);
  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState();
  const [edit, setEdit] = useState(false);
  const [search, setSearch] = useState();

  const handleEdit = useCallback((edit) => {
    setEdit(edit);
    setOpen(edit);
  }, []);

  const handleList = (input) => {
    setSelectedCar();
    if (input.sold) {
      setList((prev) => prev.filter((_, index) => index !== input.id));
    } else if (input.id || input.id === 0) {
      setList((prev) => prev.map((p, id) => (id === input.id ? input : p)));
    } else {
      setList((prev) => [...prev, input]);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const { value } = event.target[0];
    setSearch(value);
    setSelectedCar();
  };
  const filtredList = list.filter(
    (l) =>
      l.name.match(search) ||
      l.brand.match(search) ||
      String(l.year).match(search)
  );
  return (
    <>
      <header>
        <img src={carIcon} alt="Icone do Carro" className="car-icon"></img>
        <div className="header-container-text">
          <h1 className="header-text">WEB</h1>
          <h1 className="header-text">FLORIPA</h1>
          <h1 className="header-text">MOTORS</h1>
        </div>
        <form className="header-form" onSubmit={(e) => handleSearch(e)}>
          <input
            type="search"
            className="header-input"
            placeholder="Busca"
          ></input>
          <button type="submit" className="header-submit-button">
            <img
              src={magnifyingGlassIcon}
              alt="Icone de Busca"
              className="magnifying-glass-icon"
            ></img>
          </button>
        </form>
      </header>

      <div className="car-container">
        <h1 className="car-title">VEÍCULOS</h1>
        <button
          type="button"
          className="car-add-button"
          onClick={() => setOpen(true)}
        >
          <img src={plusIcon} alt="Icone de Adicao" className="plus-icon"></img>
        </button>
        {open && (
          <NewCar
            onClose={() => {
              setOpen(false);
              setEdit(false);
            }}
            submit={handleList}
            edit={edit}
            values={selectedCar}
          />
        )}
      </div>
      <hr />

      <div className="car-content-container">
        <CarList
          selected={selectedCar}
          selectCar={setSelectedCar}
          carList={filtredList}
          setEdit={handleEdit}
          handleList={handleList}
        />
      </div>
    </>
  );
}

export default LandingPage;

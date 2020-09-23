import React, { useState } from 'react';
import './LandingPage.css';

import CarList from '../CarList';
import NewCar from '../NewCar';

import carIcon from '../../images/icons/car-icon.svg';
import magnifyingGlassIcon from '../../images/icons/magnifying-glass-icon.svg';
import plusIcon from '../../images/icons/plus-icon.svg';

function LandingPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="main-container">
      <header>
        <img src={carIcon} alt="Icone do Carro" className="car-icon"></img>
        <div className="header-container-text">
          <h1 className="header-text">WEB</h1>
          <h1 className="header-text">FLORIPA</h1>
          <h1 className="header-text">MOTORS</h1>
        </div>
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
      </header>

      <div className="contant-container">
        <h1 className="contant-text">VEÍCULOS</h1>
        <button
          type="button"
          className="contant-add-button"
          onClick={() => setOpen(true)}
        >
          <img src={plusIcon} alt="Icone de Adicao" className="plus-icon"></img>
        </button>
        {open && <NewCar onClose={() => setOpen(false)} />}
      </div>
      <hr />

      <div className="car-contant-container">
        <CarList />
      </div>
    </div>
  );
}

export default LandingPage;

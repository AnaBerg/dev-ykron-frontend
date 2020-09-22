import React from 'react';
import './landing-page.css';

import CarSpecs from '../carSpecs/car-specs';
import CarList from '../carList/car-list'

import carIcon from '../../images/icons/car-icon.svg';
import magnifyingGlassIcon from '../../images/icons/magnifying-glass-icon.svg';
import plusIcon from '../../images/icons/plus-icon.svg';

function App() {
  return (
    <div className="main-container">

        <header>
          <img src={ carIcon } alt="Icone do Carro" className="car-icon"></img>
          <div className="header-container-text">
            <h1 className="header-text">WEB</h1>
            <h1 className="header-text">FLORIPA</h1>
            <h1 className="header-text">MOTORS</h1>
          </div>
          <button type="submit" className="header-submit-button">
            <img src={ magnifyingGlassIcon } alt="Icone de Busca" className="magnifying-glass-icon"></img>
          </button>
          <input type="search" className="header-input" placeholder="Busca"></input>
        </header>

        <div className="contant-container">
          <h1 className="contant-text">VEÍCULOS</h1>
          <button type="button" className="contant-add-button">
            <img src={ plusIcon } alt="Icone de Adicao" className="plus-icon"></img>
          </button>
        </div>
        <hr/>

        <div className="car-contant-container">

          <CarList/>

          <CarSpecs/>
        
        </div>

    </div>
  );
}

export default App;

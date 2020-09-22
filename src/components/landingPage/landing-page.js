import React from 'react';
import './landing-page.css';

import CarSpecs from '../carSpecs/car-specs';
import CarList from '../carList/car-list';

import carIcon from '../../images/icons/car-icon.svg';
import magnifyingGlassIcon from '../../images/icons/magnifying-glass-icon.svg';
import plusIcon from '../../images/icons/plus-icon.svg';

function App() {
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
        <button type="button" className="contant-add-button">
          <img src={plusIcon} alt="Icone de Adicao" className="plus-icon"></img>
        </button>
      </div>
      <hr />

      <div className="car-contant-container">
        <CarList />

        <CarSpecs />
      </div>

      <div className="popup-container">
        <h3 className="popup-title">Novo Veículo</h3>
        <form className="popup-form">
          <section>
            <section className="popup-section-1">
              <p className="popup-text">Veículo</p>
              <input className="new-car-name" type="text"></input>
              <p className="popup-text">Marca</p>
              <input className="new-car-brand" type="text"></input>
              <p className="popup-text">Ano</p>
              <input className="new-car-year" type="text"></input>
            </section>
            <section className="popup-section-2">
              <div class="onoffswitch">
                <input
                  type="checkbox"
                  name="onoffswitch"
                  className="onoffswitch-checkbox"
                  id="myonoffswitch"
                  tabindex="0"
                ></input>
                <label class="onoffswitch-label" for="myonoffswitch">
                  <span class="onoffswitch-inner"></span>
                  <span class="onoffswitch-switch"></span>
                </label>
              </div>
              <p className="popup-text">Vendido</p>
            </section>
          </section>
          <section className="popup-section-3">
            <p className="popup-text">Descrição</p>
            <textarea className="new-car-description" type="text"></textarea>
          </section>
          <section className="popup-section-4">
            <button className="popup-submit-button" type="submit">
              Adicionar
            </button>
            <button className="popup-cancel-button" type="button">
              Cancelar
            </button>
          </section>
        </form>
      </div>
    </div>
  );
}

export default App;

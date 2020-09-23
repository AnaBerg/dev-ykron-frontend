import React from 'react';
import './NewCar.css';

function NewCar({ onClose }) {
  return (
    <div className="modal">
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
              <input className="new-car-year" type="number"></input>
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
            <button className="popup-button" type="submit">
              Adicionar
            </button>
            <button
              className="popup-button"
              type="button"
              onClick={() => onClose()}
            >
              Cancelar
            </button>
          </section>
        </form>
      </div>
    </div>
  );
}

export default NewCar;

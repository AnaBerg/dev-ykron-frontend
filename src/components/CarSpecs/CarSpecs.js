import React, { useState } from 'react';
import './CarSpecs.css';

import SellConfirmation from '../SellConfirmation';

import pencilIcon from '../../images/icons/pencil-icon.svg';
import shoppingCartIcon from '../../images/icons/shopping-cart-icon.svg';

function CarSpecs({ name, brand, year, description, setEdit, id, handleList }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="car-specs-main-container">
      <h3 className="car-specs-title">Detalhes</h3>
      <div className="car-specs-contant">
        <h3 className="car-name-text">{name}</h3>
        <div className="car-specs-container">
          <div className="car-brand-container">
            <p className="car-subtitle">MARCA</p>
            <p className="car-text">{brand}</p>
          </div>
          <div className="car-year-container">
            <p className="car-subtitle">ANO</p>
            <p className="car-text">{year}</p>
          </div>
        </div>
        <p className="car-description">{description}</p>
        <div className="car-button-container">
          <button
            className="edit-button"
            type="button"
            onClick={() => setEdit(true)}
          >
            <img
              src={pencilIcon}
              alt="Icone de Caneta"
              className="pencil-icon"
            ></img>
          </button>
          <button
            className="buy-button"
            type="button"
            onClick={() => setOpen(true)}
          >
            COMPRAR
            <img
              src={shoppingCartIcon}
              alt="Icone de Carrinho de Compra"
              className="shopping-cart-icon"
            ></img>
          </button>
          {open && <SellConfirmation id={id} handleList={handleList} />}
        </div>
      </div>
    </div>
  );
}

export default CarSpecs;

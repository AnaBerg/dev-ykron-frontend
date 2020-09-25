import React from 'react';
import './SellConfirmation.css';

function SellConfirmation({ handleList, id }) {
  return (
    <div className="modal">
      <div className="confirmation-container">
        <h3 className="confirmation-text">Obrigado pela compra</h3>
        <button
          className="confirmation-button"
          type="button"
          onClick={() => handleList({ id, sold: true })}
        >
          FECHAR
        </button>
      </div>
    </div>
  );
}

export default SellConfirmation;

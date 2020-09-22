import React from 'react';
import './car-list.css';

function App() {
    return (
        <div className="car-list-container">
        
        <h3 className="car-list-text">Lista de Carros</h3>
        
        <button type="button"className="car-list-contant">
          <h3 className="car-list-brand-text">Fiat</h3>
          <p className="car-list-model-text">Palio G5 SP.1.6 Flex</p>
          <p className="car-list-year-text">2016</p>
        </button>

      </div>
    );
}

export default App;
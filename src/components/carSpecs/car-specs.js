import React from 'react';
import './car-specs.css';

import pencilIcon from '../../images/icons/pencil-icon.svg';
import shoppingCartIcon from '../../images/icons/shopping-cart-icon.svg';

function App() {
    return(

        <div className="car-specs-container">
            <h3 className="car-specs-title">Detalhes</h3>
            <div className="car-specs-contant">
              <h3 className="car-name-text">Palio G5 SP.1.6 Flex</h3>
              <div className="car-specs-year-brand-container">
                <div className="car-brand-container">
                  <p className="brand-text">MARCA</p>
                  <p className="car-specs-brand-text">Fiat</p>
                </div>
                <div className="car-year-container">
                  <p className="year-text">ANO</p>
                  <p className="car-specs-year-text">2016</p>
                </div>
              </div>
              <p className="car-specs-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in semper dolor. Praesent aliquet placerat sem quis malesuada. Quisque ac dapibus velit. Morbi consectetur malesuada orci, nec pulvinar velit tristique nec. Vivamus at eros sit amet metus interdum volutpat. In vehicula aliquet auctor. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque vel diam nec eros efficitur congue ac non lectus. Sed at libero vitae libero posuere laoreet sed sed tellus. Nam imperdiet, mauris condimentum iaculis sagittis, magna diam malesuada ante, vitae pretium tellus tellus eget velit. In nec libero nisi. Suspendisse potenti. Nullam faucibus tempor mi pharetra accumsan. Sed nec placerat neque, ac egestas ante.</p>
              <div className="car-button-container">
                <button className="edit-button" type="button">
                  <img src={ pencilIcon } alt="Icone de Caneta" className="pencil-icon"></img>
                </button>
                <button className="buy-button" type="button">
                  COMPRAR
                  <img src={ shoppingCartIcon } alt="Icone de Carrinho de Compra" className="shopping-cart-icon"></img>
                </button>
            </div>
            </div>
          </div>

    );
}

export default App;
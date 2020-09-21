import React from 'react';
import './landing-page.css';
import carIcon from '../../images/icons/car-icon.svg'
import magnifyingGlassIcon from '../../images/icons/magnifying-glass-icon.svg'
import plusIcon from '../../images/icons/plus-icon.svg'
import pencilIcon from '../../images/icons/pencil-icon.svg'

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
          <input type="search" className="header-input"></input>
        </header>

        <div className="contant-container">
          <h1 className="contant-text">VEÍCULOS</h1>
          <button type="button" className="contant-add-button">
            <img src={ plusIcon } alt="Icone de Adicao" className="plus-icon"></img>
          </button>
        </div>
        <hr/>

        <div className="car-contant-container">
          
          <div className="car-list-container">
            <h3 className="car-list-text">Lista de Carros</h3>
            
            <button type="button"className="car-list-contant">
              <h3 className="car-list-brand-text">Fiat</h3>
              <p className="car-list-model-text">Palio G5 SP.1.6 Flex</p>
              <p className="car-list-year-text">2016</p>
            </button>
            <button type="button"className="car-list-contant">
              <h3 className="car-list-brand-text">Fiat</h3>
              <p className="car-list-model-text">Palio G5 SP.1.6 Flex</p>
              <p className="car-list-year-text">2016</p>
            </button>
            <button type="button"className="car-list-contant">
              <h3 className="car-list-brand-text">Fiat</h3>
              <p className="car-list-model-text">Palio G5 SP.1.6 Flex</p>
              <p className="car-list-year-text">2016</p>
            </button>
            <button type="button"className="car-list-contant">
              <h3 className="car-list-brand-text">Fiat</h3>
              <p className="car-list-model-text">Palio G5 SP.1.6 Flex</p>
              <p className="car-list-year-text">2016</p>
            </button>
            <button type="button"className="car-list-contant">
              <h3 className="car-list-brand-text">Fiat</h3>
              <p className="car-list-model-text">Palio G5 SP.1.6 Flex</p>
              <p className="car-list-year-text">2016</p>
            </button>
            <button type="button"className="car-list-contant">
              <h3 className="car-list-brand-text">Fiat</h3>
              <p className="car-list-model-text">Palio G5 SP.1.6 Flex</p>
              <p className="car-list-year-text">2016</p>
            </button>
            <button type="button"className="car-list-contant">
              <h3 className="car-list-brand-text">Fiat</h3>
              <p className="car-list-model-text">Palio G5 SP.1.6 Flex</p>
              <p className="car-list-year-text">2016</p>
            </button>
            <button type="button"className="car-list-contant">
              <h3 className="car-list-brand-text">Fiat</h3>
              <p className="car-list-model-text">Palio G5 SP.1.6 Flex</p>
              <p className="car-list-year-text">2016</p>
            </button>
            <button type="button"className="car-list-contant">
              <h3 className="car-list-brand-text">Fiat</h3>
              <p className="car-list-model-text">Palio G5 SP.1.6 Flex</p>
              <p className="car-list-year-text">2016</p>
            </button>
            <button type="button"className="car-list-contant">
              <h3 className="car-list-brand-text">Fiat</h3>
              <p className="car-list-model-text">Palio G5 SP.1.6 Flex</p>
              <p className="car-list-year-text">2016</p>
            </button>
            <button type="button"className="car-list-contant">
              <h3 className="car-list-brand-text">Fiat</h3>
              <p className="car-list-model-text">Palio G5 SP.1.6 Flex</p>
              <p className="car-list-year-text">2016</p>
            </button>
            
          </div>

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
                <button className="buy-button" type="button">COMPRAR</button>
            </div>
            </div>
          </div>
        
        </div>

    </div>
  );
}

export default App;

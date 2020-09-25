import React, { useCallback, useState } from 'react';
import './NewCar.css';

function FormCar({ onClose, values = {}, submit, edit }) {
  const defaultValue = edit
    ? values
    : { name: '', brand: '', year: '', sold: false, description: '' };
  const [formState, setFormState] = useState(defaultValue);
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      submit(formState);
      onClose();
    },
    [formState, onClose, submit]
  );
  const handleChange = useCallback((event) => {
    let { value, checked, name, type } = event.target;
    if (type === 'checkbox') {
      value = checked;
    }
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  return (
    <div className="modal">
      <div className="popup-container">
        <h3 className="popup-title">Novo Veículo</h3>
        <form className="popup-form" onSubmit={handleSubmit}>
          <section>
            <section className="popup-section-1">
              <p className="popup-text">Veículo</p>
              <input
                className="new-car-name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                name="name"
                required
              />
              <p className="popup-text">Marca</p>
              <input
                className="new-car-brand"
                type="text"
                value={formState.brand}
                onChange={handleChange}
                name="brand"
                required
              />
              <p className="popup-text">Ano</p>
              <input
                className="new-car-year"
                type="number"
                value={formState.year}
                onChange={handleChange}
                name="year"
                required
              />
            </section>
            {edit && (
              <section className="popup-section-2">
                <div className="onoffswitch">
                  <input
                    type="checkbox"
                    className="onoffswitch-checkbox"
                    id="myonoffswitch"
                    tabIndex="0"
                    checked={formState.sold}
                    onChange={handleChange}
                    name="sold"
                  />
                  <label className="onoffswitch-label" htmlFor="myonoffswitch">
                    <span className="onoffswitch-inner"></span>
                    <span className="onoffswitch-switch"></span>
                  </label>
                </div>
                <p className="popup-text">Vendido</p>
              </section>
            )}
          </section>
          <section className="popup-section-3">
            <p className="popup-text">Descrição</p>
            <textarea
              className="new-car-description"
              type="text"
              value={formState.description}
              onChange={handleChange}
              name="description"
              required
            />
          </section>
          <section className="popup-section-4">
            <button className="popup-button" type="submit">
              ADICIONAR
            </button>
            <button
              className="popup-button"
              type="button"
              onClick={() => onClose()}
            >
              CANCELAR
            </button>
          </section>
        </form>
      </div>
    </div>
  );
}

export default FormCar;

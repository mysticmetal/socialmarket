import React from 'react';

import './style.css';

export function ProductNameInput() {
  const nameInputRef = React.useRef(null);

  React.useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  return(
    <div className="product-name-wrap">
      <label className="common-input-label" >Nome Do Produto</label>
      <input className="common-input normal-input"  placeholder="Aa" ref={nameInputRef} />
    </div>
  );
}

export function ProductDescriptionInput() {
  return(
    <div className="product-description-wrap">
      <label className="common-input-label">Descrição Do Produto (opcional)</label>
      <textarea className="common-input" rows="5" ></textarea>
    </div>
  );
}

export function PriceInput(props) {
  return(
    <div className="product-price-wrap">
      <label className="common-input-label">Preço { props.isMaxPrice && "Máximo" } { props.isRequired ? "": "(opcional)" } </label>
      <div className="input-select-price-wrap">

        <div className="price-input-wrap">
          <input className="common-input normal-input" type="number" />
        </div>

        <div className="select-price-currency-wrap" >
          <select className="common-select" >
            <option>MZN</option>
            <option>USD</option>
            <option>EUR</option>
            <option>RSA</option>
          </select>
        </div>

      </div>
    </div>
  );
}

export function AddLocation() {
  return(
    <div className="add-location-wrap">
        <p>Adicionar minha Localização</p>
        <input type="checkbox"/>
    </div>
  );
}

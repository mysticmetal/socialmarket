import './style.css';
import { PencilSquare, ShopWindow, Image } from 'react-bootstrap-icons';

function SellBuy() {
  return(
    <div id="sell-buy-container">
      <div id="sell-buy-wrap">
        <h4><b>Oque desejas?</b></h4>
        <div id="sell-buy">
          <button id="buy" >Comprar</button>
          <button id="sell" >Vender</button>
        </div>
        <div id="sell-buy-options">
          <div id="sell-buy-text">
            <div><PencilSquare id="icon" /></div>
            <div><span>Texto</span></div>
          </div>
          <div id="sell-buy-location">
            <div><ShopWindow id="icon" /></div>
            <div><span>Nova Loja</span></div>
          </div>
          <div id="sell-buy-photo">            
            <div><Image id="icon" /></div>
            <div><span>Photo</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellBuy;

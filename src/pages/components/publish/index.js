import { useNavigate } from "react-router-dom";

import './style.css';
import { PencilSquare, ShopWindow, Image } from 'react-bootstrap-icons';

function SellBuy() {

  let navigate = useNavigate();

  return(
    <div className="container-wrap">
      <div className="sell-buy-wrap">
        <h4><b>Oque desejas?</b></h4>
        <div className="sell-buy">
          <button 
            onClick={ () => navigate("/buy")}  
            className="buy-btn" 
          >
            Comprar
          </button>
          <button 
            onClick={ () => navigate("/sell")}  
            className="sell-btn" 
          >
            Vender
          </button>
        </div>
        <div className="sell-buy-options">
          <div className="sell-buy-text">
            <div><PencilSquare className="icon" /></div>
            <div><span>Texto</span></div>
          </div>
          <div className="sell-buy-location">
            <div><ShopWindow className="icon" /></div>
            <div><span>Nova Loja</span></div>
          </div>
          <div className="sell-buy-photo">            
            <div><Image className="icon" /></div>
            <div><span>Photo</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellBuy;

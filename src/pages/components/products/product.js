import './style.css';
import { Cart, Bookmark } from 'react-bootstrap-icons';


function Product(props) {
  return(
    <div>

      <div className="product">
        <div className="product-img-wrap">
          <img src={ props.image}  className="product-img" alt="not found" />
        </div>
        <div className="product-body"> 
          <div className="product-info">
            <h6 className="product-name" >{ props.name }</h6>
            <h6 className="product-desc" >{ props.description }</h6>

            { 
              props.flag === 0 ? <h6 className="product-pric" >$ { props.price }</h6> : 
              <div className="product-pric-wanted-wrap" >
                <h6 className="product-pric-wanted" >
                  preço máximo: <small className="wanted-price" >$ { props.price }</small>
                </h6> 
                <small className="muted-text product-interests">
                  42 interessados
                </small> 
              </div>
            }

          </div>
          <div className="product-actions">
            <div>
              <span className="action-icon-wrap">
                { props.flag === 0 ? <Cart className="action-icon" /> :  <Bookmark className="action-icon" />}
              </span>
            </div>
            <div className="action-name-wrap">
              <span className="actiin-name">
                { props.flag === 0 ? "Comprar" : "Vender" }
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Product;

import './style.css';
import { CartFill } from 'react-bootstrap-icons';
import productImg from './../../../assets/img/product.png';


function Products() {
  return(
    <div>
      <div id="products-section">
        <h3><p>Em Alta</p></h3>
        <div id="products">

          <div id="product">
            <div id="product-img">
              <img src={productImg} alt="" />
            </div>
            <div id="product-body"> 
              <div id="product-desc">
                <h6 id="product-name" >Smart kicka 5</h6>
                <h6 id="product-desc" >8GB de RAM, 16GB de armazenamento...</h6>
                <h6 id="product-pric" >$ 53</h6>
              </div>
              <div id="product-actions">
                <div id="add-cart">
                  <span id="cart">
                    <CartFill id="cart-icon" />
                  </span>
                </div>
                <div id="buy-now-div">
                  <span id="buy-now">
                    $ Comprar
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="product">
            <div id="product-img">
              <img src={productImg} alt="" />
            </div>
            <div id="product-body"> 
              <div id="product-desc">
                <h6 id="product-name" >Smart kicka 5</h6>
                <h6 id="product-desc" >8GB de RAM, 16GB de armazenamento...</h6>
                <h6 id="product-pric" >$ 53</h6>
              </div>
              <div id="product-actions">
                <div id="add-cart">
                  <span id="cart">
                    <CartFill id="cart-icon" />
                  </span>
                </div>
                <div id="buy-now-div">
                  <span id="buy-now">
                    $ Comprar
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="product">
            <div id="product-img">
              <img src={productImg} alt="" />
            </div>
            <div id="product-body"> 
              <div id="product-desc">
                <h6 id="product-name" >Smart kicka 5</h6>
                <h6 id="product-desc" >8GB de RAM, 16GB de armazenamento...</h6>
                <h6 id="product-pric" >$ 53</h6>
              </div>
              <div id="product-actions">
                <div id="add-cart">
                  <span id="cart">
                    <CartFill id="cart-icon" />
                  </span>
                </div>
                <div id="buy-now-div">
                  <span id="buy-now">
                    $ Comprar
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="product">
            <div id="product-img">
              <img src={productImg} alt="" />
            </div>
            <div id="product-body"> 
              <div id="product-desc">
                <h6 id="product-name" >Smart kicka 5</h6>
                <h6 id="product-desc" >8GB de RAM, 16GB de armazenamento...</h6>
                <h6 id="product-pric" >$ 53</h6>
              </div>
              <div id="product-actions">
                <div id="add-cart">
                  <span id="cart">
                    <CartFill id="cart-icon" />
                  </span>
                </div>
                <div id="buy-now-div">
                  <span id="buy-now">
                    $ Comprar
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Products;

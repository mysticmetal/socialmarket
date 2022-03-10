import './style.css';
import { CartFill } from 'react-bootstrap-icons';

import p1 from './../../../assets/img/S3/products/555.jpg';
import p2 from './../../../assets/img/S3/products/1111.jpg';
import p3 from './../../../assets/img/S3/products/2222.jpg';
import p4 from './../../../assets/img/S3/products/3333.jpg';

function Products() {
  return(
    <div>
      <div id="products-section">
        <h3><p>Em Alta</p></h3>
        <div id="products">

          <div id="product">
            <div id="product-img">
              <img src={ p1}  alt="" />
            </div>
            <div id="product-body"> 
              <div id="product-desc">
                <h6 id="product-name" >Almoço frances</h6>
                <h6 id="product-desc" >O melhor prato que existem em toda frannça.</h6>
                <h6 id="product-pric" >$ 23</h6>
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
              <img src={ p2 }  alt="" />
            </div>
            <div id="product-body"> 
              <div id="product-desc">
                <h6 id="product-name" >Huawei P40 pro</h6>
                <h6 id="product-desc" >12GB de RAM, 128GB de armazenamento...</h6>
                <h6 id="product-pric" >$ 1200</h6>
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
              <img src={ p3 } alt="" />
            </div>
            <div id="product-body"> 
              <div id="product-desc">
                <h6 id="product-name" >AirPods 2</h6>
                <h6 id="product-desc" >Som de alta qualidade, autonomia de 3 dias.</h6>
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
              <img src={ p4 } alt="" />
            </div>
            <div id="product-body"> 
              <div id="product-desc">
                <h6 id="product-name" >Nike Air Force</h6>
                <h6 id="product-desc" >Ultimo modelo da nike, ainda nova.</h6>
                <h6 id="product-pric" >$ 230</h6>
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

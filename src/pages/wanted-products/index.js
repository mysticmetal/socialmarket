import './style.css';

import Header from './../components/header/index';
import NavBar from './../components/bottom-navbar/index';
import Categories from './../components/products-categories/index';
import Products from './../components/products/wanted/index';

function WantedProducts() {
  return(
    <>
      <Header />
      <div className="container-wrap">
        <h2 className="products-title-bordered" >Lista de Productos que os clientes estao a procura</h2>
        <Categories />
        <div style={{ marginBottom: "3.5rem"  }}  className="wanted-products-wrap">
          <Products />
        </div>
        <NavBar menuId={2} />
      </div>
    </>
  );
}

export default WantedProducts;

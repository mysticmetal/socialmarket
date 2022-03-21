import './style.css';

import Header from './../components/header/index';
import SellBuy from './../components/publish/index';
import Categories from './../components/products-categories/index';
import Products from './../components/products/selled/index';
import NavBar from './../components/bottom-navbar/index';

function HomePage() {
  return(
    <div>
      <Header />
      <SellBuy />
      <div className="container-wrap mb-3">
        <Categories />
        <Products />
      </div>
      <NavBar menuId={1} />
    </div>
  );
}

export default HomePage;

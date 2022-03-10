import './style.css';

import Header from './../components/header/index';
import SellBuy from './../components/publish/index';
import Categories from './../components/products-categories/index';
import Products from './../components/products/index';
import NavBar from './../components/bottom-navbar/index';

function HomePage() {
  return(
    <div>
      <div id="home-body">
        <Header />
        <SellBuy />
        <Categories />
        <Products />
      </div>
      <NavBar /> 
    </div>
  );
}

export default HomePage;

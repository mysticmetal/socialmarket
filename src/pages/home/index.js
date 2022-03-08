import './style.css';

import Header from './../components/header/index';
import SellBuy from './../components/sell-buy/index';
import Categories from './../components/categories/index';
import Products from './../components/products/index';
import NavBar from './../components/navbar/index';

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

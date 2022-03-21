import Header from './../components/header/index';
import BottomNavbar from './../components/bottom-navbar/index';
import Categories from './../components/products-categories/index';
import Selled from './../components/products/selled/index';

function SelledProducts() {
  return(
    <>
      <Header />
      <h2 className="products-title-bordered" >Lista de produtos que estão a venda</h2>
      <Categories />
      <div style={{ marginBottom: '3.5rem' }} >
        <Selled />
      </div>
      <BottomNavbar menuId={3} />
    </>
  );
}

export default SelledProducts;

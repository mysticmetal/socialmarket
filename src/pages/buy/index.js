import SimpleNavBar from './../components/simple-navbar/index';
import BuyBody from './../components/buy-body/index';

function BuyPage() {
  return(
    <div>
      <SimpleNavBar operation="compra" />
      <BuyBody />
    </div>
  );
}

export default BuyPage;

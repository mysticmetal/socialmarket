import './style.css';

import SimpleNavBar from './../components/simple-navbar/index';
import SellBody from './components/sell-body/index';

function Sell() {
  return(
    <div>
      <div id="sell-page-wrap">
        <SimpleNavBar operation="venda"/>
        <div className="container-wrap">
          <SellBody />
        </div>
      </div>
    </div>
  );
}

export default Sell;

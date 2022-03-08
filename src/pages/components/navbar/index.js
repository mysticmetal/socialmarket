import './style.css';

import { House, People, Search ,Shop } from 'react-bootstrap-icons';

function NavBar() {
  return(
    <div>
      <div id="navbar-wrap">

        <div id="home-wrap">
          <House id="nav-icon" />
        </div> 
        <div id="wanted-wrap">
          <People id="nav-icon" />
        </div> 
        <div id="store-wrap">
          <Shop id="nav-icon"/> 
        </div> 

      </div>
    </div>
  );
}

export default NavBar;

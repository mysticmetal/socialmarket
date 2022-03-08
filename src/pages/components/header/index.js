import './style.css';
import ProfilePicture from './../profile-picture/index';
import { Search, BellFill } from 'react-bootstrap-icons';

function Header() {
  return(
    <div>
      <div id="head-wrap">

        <div id="prof-pic-wrap">
          <ProfilePicture />
        </div>

        <div id="search-wrap">
          <Search />
          <input id="search-input" type="search" placeholder="procura um artigo..." />
        </div>

        <div id="notif-wrap">
          <BellFill size="1.4rem" id="notif-icon"/>
          <span id="notif-badge" >5</span>
        </div>

      </div>
    </div>
  );
}

export default Header;

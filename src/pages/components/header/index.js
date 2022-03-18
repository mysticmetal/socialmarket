import './style.css';
import ProfilePicture from './../profile-picture/index';
import { Search, BellFill } from 'react-bootstrap-icons';

function Header() {
  return(
    <div>
      <div className="head-wrap">

        <div className="prof-pic-wrap">
          <ProfilePicture />
        </div>

        <div className="search-wrap">
          <Search />
          <input className="header-search-input" type="search" placeholder="procura um artigo..." />
        </div>

        <div className="notif-wrap">
          <BellFill size="1.4rem" className="notif-icon"/>
          <span className="notif-badge" >5</span>
        </div>

      </div>
    </div>
  );
}

export default Header;

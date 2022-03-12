import { useState } from 'react';

import './style.css';
import { House, People, Shop, Cart } from 'react-bootstrap-icons';

function NavBar() {
  
  const [navItems, setActiveNavItem] = useState([
    {
      key: 1,
      icon: House,
      isActive: true,
      target: '/'
    },
    { key: 2,
      icon: People,
      isActive: false,
      target: 'wanted/'
    },
    {
      key: 3,
      icon: Shop,
      isActive: false,
      target: '/'
    },
    {
      key: 4,
      icon: Cart,
      isActive: false,
      target: '/'
    }
  ]);

  function handleActive(key) {
    const newNavItems = navItems.map(item => {
      return item.key === key ? { ...item, isActive: true } : { ...item, isActive: false };
    });

    setActiveNavItem(newNavItems);
  }
  
  return(
    <div>
      <div id="navbar-wrap">

        { navItems.map((item) => (
          <div id="nav-icons">
            <item.icon onClick={() => handleActive(item.key) }  className={ item.isActive ? 'is-active' : '' } key={item.key} id="nav-icon" />
          </div> 
        ))}
      
      </div>
    </div>
  );
}

export default NavBar;

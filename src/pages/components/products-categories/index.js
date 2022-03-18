import './style.css';
import './offcanvas.css';

import { Cpu, Book } from 'react-bootstrap-icons';

function Categories() {
  return(
    <div className="container-wrap">
      <div className="categories">

        <div>
          <h3>Categorias</h3>
        </div>

        <div className="nav-scroller nav-div">
          <nav className="nav nav-underline">

            <span id="category" className="one nav-link">
              <Cpu className="category-icon" />
              Eletrónicos
            </span>
            <span id="category" className="two nav-link">
              Vestúario
            </span>
            <span id="category" className="three nav-link">
              Calsados
            </span>
            <span id="category" className="four nav-link">
              Alimentares
            </span>
            <span id="category" className="five nav-link">
              <Book className="category-icon" />
              Lívros
            </span>
            <span id="category" className="six nav-link">
              Automóveis
            </span>
            <span id="category" className="seven nav-link">
              Mídia
            </span>

          </nav>
        </div>

      </div>
    </div>
  );
}

export default Categories;

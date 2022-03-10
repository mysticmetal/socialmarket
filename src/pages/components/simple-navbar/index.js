import { useNavigate } from "react-router-dom";

import './style.css';
import { ArrowLeft } from 'react-bootstrap-icons';

function SimpleNavBar(props) {
  const navigate = useNavigate();

  return(
    <div>
      <div id="s-navbar-wrap">

        <div id="back-action">
          <ArrowLeft onClick={ () => navigate('/')  }  id="back-icon"/>
          <span>Nova { props.operation }</span> 
        </div>

        <div id="done-action">
          <span>Publicar</span>  
        </div>

      </div>
    </div>
  );
}

export default SimpleNavBar;

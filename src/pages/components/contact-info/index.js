import './style.css';
import { AddLocation } from './../common-inputs/index';

function ContactInfo() {
  return(
    <div>
      <div className="contact-info-wrap">
        <p>Informações de contacto</p>
        <small className="muted-text" >escolha a forma pela qual os seus clientes poderam entrar em contacto para aquisição do produto(s)</small>
        
        <label className="common-input-label">Telefone</label>
        <div className="phone-contact-wrap">
          <div className="select-phone-code">
            <select className="common-select">
              <option>+258</option>
              <option>+227</option>
              <option>+115</option>
              <option>+370</option>
            </select>
          </div>
          <div className="phone-input-wrap">
            <input className="phone-input common-input normal-input" type="number" required />
          </div>
        </div>

        <label className="common-input-label">Email (opcional)</label>
        <div className="email-contact-wrap">
          <input className="common-input normal-input" type="email" />
        </div>
        
        <AddLocation />

      </div>
    </div>
  );
}

export default ContactInfo;

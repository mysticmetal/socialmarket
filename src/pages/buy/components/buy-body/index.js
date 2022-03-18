import { useState }  from 'react';
import { useNavigate } from "react-router-dom";

import './style.css';
import { FileImage, Trash } from 'react-bootstrap-icons';

import { ProductNameInput,
  ProductDescriptionInput,
  PriceInput,
} from './../../../components/common-inputs/index';
import ContactInfo from './../../../components/contact-info/index';


function BuyBody() {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState([]);  
  
  function handleOnChange(e) {
    if(e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setSelectedImage([reader.result]);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function handleDescardSelectedImage() {
    setSelectedImage([]);
  }

  return(
    <div>
      <div className="container">
        <form className="buy-form" >
          
          <ProductNameInput />
          <ProductDescriptionInput />
          <PriceInput isMaxPrice={true} />
          
          { selectedImage.map( image => (
            <div className="uploaded-image">
              <img 
                src={image} 
                className="uploaded-image-show"  
                alt="not found" 
              />

              <Trash 
                className="trash-icon" 
                onClick={ () => handleDescardSelectedImage() } 
              />  
            </div>
          ))}

          <input 
            onChange={ e => handleOnChange(e) }  
            className="upload-image-input" 
            type="file" 
            accept="image/*" 
          />

          <button 
            onClick={ () => { 
              document.querySelector(".upload-image-input")
                .click();
            }}
            className="large-button" 
            type="button" 
          >
            <FileImage 
              className="upload-image-icon" 
            /> 
            Carregar Imagem
          </button>

          <ContactInfo text="escolha a forma pela qual os vendedores poderam entrar em contacto."/> 

          <button 
            onClick={ () => navigate('/') }  
            className="large-button  submit-button" 
            type="button" 
          >
            Publicar
          </button>

        </form>
      </div>
    </div>
  )
}

export default BuyBody;

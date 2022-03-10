import { useState }  from 'react';
import { useNavigate } from "react-router-dom";

import './style.css';
import { FileImage, Trash } from 'react-bootstrap-icons';

import { ProductNameInput,
  ProductDescriptionInput,
  PriceInput,
  AddLocation
} from './../common-inputs/index.js';


function BuyBody() {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);  
  
  function handleOnChange(e) {
    if(e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setSelectedImage(reader.result);
        document.querySelector(".uploaded-image").style.display='flex';
        document.querySelector(".trash-icon").style.display='block';
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function handleDescardSelectedImage() {
    document.querySelector(".uploaded-image").style.display='none';
    document.querySelector(".trash-icon").style.display='none';
    setSelectedImage(null);
  }

  return(
    <div>
      <div className="container">
        <form className="buy-form" >
          
          <ProductNameInput />
          <ProductDescriptionInput />
          <PriceInput isMaxPrice={true} />
          <AddLocation />

          <div className="uploaded-image">
            <img 
              src={selectedImage} 
              className="uploaded-image-show"  
              alt="not found" 
            />

            <Trash 
              className="trash-icon" 
              onClick={ () => handleDescardSelectedImage() } 
            />  
          </div>

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

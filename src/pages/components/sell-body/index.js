import { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { FileImage, Trash } from 'react-bootstrap-icons';

import './style.css';

import { ProductNameInput,
  ProductDescriptionInput,
  PriceInput,
} from './../common-inputs/index';

import ContactInfo from './../contact-info/index';


function SellBody() {

  const navigate = useNavigate();

  const [selectedImages, setSelectedImages] = useState([]);

  function handleOnChange(e) {
    if(e.target.files) {
      const newSelectedImages = Array.from(e.target.files).map(file => 
        { 
          return {
            id: Math.random(), 
            image: URL.createObjectURL(file)
          } 
      });

      setSelectedImages((selectedImages) => selectedImages.concat(newSelectedImages));
      Array.from(e.target.files).map(file => URL.revokeObjectURL(file));
    }
  }

  function handleDiscardImage(id) {
    const imageIndex = selectedImages.findIndex( image => image.id === id);
    const newSelectedImages = [...selectedImages];
    newSelectedImages.splice(imageIndex, 1);
    setSelectedImages(newSelectedImages);
  }

  const renderUploadedImages = images => {
    return images.map( image => {
      return(
        <div key={ image.id } className="uploaded-image-wrap">
          <img
            src={image.image}
            className="show-uploaded-image"
            alt="not found"
          />

          <Trash
            className="trash-icons"
            onClick={ () => handleDiscardImage(image.id) }
          />
        </div>
      );

    });
  }
  
  return(
    <div>
      <div className="sell-body-wrap container">
        <form className="sell-form" >

          <ProductNameInput />
          <ProductDescriptionInput />
          <PriceInput isRequired={true} />

          <div className="uploaded-images-wrap" >
            { renderUploadedImages(selectedImages) }
          </div>

          <input
            onChange={ e => handleOnChange(e) }
            className="upload-image-input"
            type="file" multiple
            accept="image/*"
          />

          <button
            onClick={ () => {
              document.querySelector(".upload-image-input")
                .click();
            }}
            className="large-button"
            type="button"
            style={{ marginTop: '1rem' }}
          >
            <FileImage
              className="upload-image-icon"
            />
            Carregar Imagem
          </button>
          
          <ContactInfo />

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
  );
}

export default SellBody;

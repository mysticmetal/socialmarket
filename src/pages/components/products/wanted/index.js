import { useState } from 'react';
import Product from './../product';
import './style.css';

import p1 from './../../../../assets/img/S3/products/555.jpg';
import p2 from './../../../../assets/img/S3/products/1111.jpg';
import p3 from './../../../../assets/img/S3/products/2222.jpg';
import p4 from './../../../../assets/img/S3/products/3333.jpg';

function WantedProducts(props) {

  const [products] = useState([
    {
      image: p1,
      name: "Almoço frances",
      description: "O melhor prato que existem em toda frannça.",
      price: 23,
      flag: 1
    },
    {
      image: p2,
      name: "Huawei P40 pro",
      description: "12GB de RAM, 128GB de armazenamento...",
      price: 1200,
      flag: 1
    },
    {
      image: p3,
      name: "AirPods 5",
      description: "Som de alta qualidade, autonomia de 3 dias.",
      price: 53,
      flag: 1
    },
    {
      image: p4,
      name: "Nike Air Force 2",
      description: "Ultimo modelo da nike, ainda nova.",
      price: 250,
      flag: 1
    }
  ])

  return(
    <div>
      <div className="products-section">
        <h3><p>Mais procurados</p></h3>
        <div className="products">
        
          { products.map( product => {
              return Product(product)
            })
          }

        </div>
      </div>
    </div>
  );
}

export default WantedProducts;

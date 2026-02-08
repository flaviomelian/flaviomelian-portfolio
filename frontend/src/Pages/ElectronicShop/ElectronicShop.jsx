import React from 'react';
import './ElectronicShop.css';
import e1 from '../../assets/e-shop (1).jpg';
import e2 from '../../assets/e-shop (2).jpg';
import e3 from '../../assets/e-shop (3).jpg';
import e4 from '../../assets/e-shop (4).jpg';
import e5 from '../../assets/e-shop (5).jpg';
import e6 from '../../assets/e-shop (6).jpg';
import e7 from '../../assets/e-shop (7).jpg';
import e8 from '../../assets/e-shop (8).jpg';
import flutterIcon from '../../assets/flutter-logo.png';
import springbootIcon from '../../assets/springboot-inner.svg';
import mysql from '../../assets/mysql.jpg';

const images = [e1, e2, e3, e4, e5, e6, e7, e8];

const ElectronicShop = () => {
  return (
    <div className="electronic-shop-container">
      <h1>ElectronicShop</h1>
      <div className="stack-icons">
        <img src={flutterIcon} alt="Flutter" className="tech-icon" />
        <img src={springbootIcon} alt="Spring Boot" className="tech-icon" />
        <img src={mysql} alt="MySQL" className="tech-icon mysql" />
      </div>
      <p className="description">
        Esta es una aplicación de comercio electrónico desarrollada con <strong>Flutter</strong> para el frontend y <strong>Spring Boot</strong> como backend. 
        Permite a los usuarios explorar productos electrónicos, agregarlos al carrito y realizar pedidos. La app ofrece autenticación, gestión de productos, pasarela de pagos, 
        y una interfaz moderna y responsiva.
      </p>

      <div className="image-grid">
        {images.map((img, index) => (
          <div key={index} className="image-item">
            <img src={img} alt={`Electronic Shop ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectronicShop;


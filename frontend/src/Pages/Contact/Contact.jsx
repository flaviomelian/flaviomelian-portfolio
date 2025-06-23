import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí puedes conectar con EmailJS, Formspree o tu backend
    alert('¡Gracias por tu mensaje!');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section className="contacto">
      <form onSubmit={handleSubmit}>
        <h2>Contacto</h2>
        <label>
          Nombre
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Correo electrónico
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <select
          className="asunto-select"
          onChange={handleChange}
          required
          name="asunto"
          value={formData.asunto || ''}>
            <option value="" disabled>Selecciona un asunto</option>
            <option value="consulta">Consulta</option>
            <option value="app-web">App Web</option>
            <option value="app-mobile">App Mobile</option>
            <option value="app-multiplataforma">App Multiplataforma</option>
        </select>
        <label>
          Mensaje
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;

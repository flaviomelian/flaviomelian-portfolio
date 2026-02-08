import React from "react";
import next from "../../assets/next.png";
import spring from "../../assets/springboot-inner.svg";
import mysql from "../../assets/mysql.jpg";
import clipecmas from "../../assets/clip-ecmas.mp4";
import "./ECMAS.css";

const ECMAS = () => {
  return (
    <div className="project">
      <h2>FloraSense Software (Proyecto ECMAS)</h2>
      <div className="stack-ecmas">
        <img className="next-ecmas" src={next} />
        <img className="spring-ecmas" src={spring} />
        <img className="mysql-ecmas" src={mysql} />
      </div>
      <p className="ecmas-text">
        <strong>
          ECMAS es un software web diseñado para el monitoreo y gestión de
          cultivos y vegetación, ofreciendo a agricultores, investigadores y
          entusiastas del medio ambiente una herramienta accesible, intuitiva y
          basada en datos para optimizar el cuidado de sus plantas. La
          plataforma permite la visualización en tiempo real de humedad,
          temperatura y crecimiento a través de sensores conectados, envía
          alertas automáticas ante condiciones críticas, y ofrece historial y
          análisis con gráficas y reportes fáciles de interpretar. Su interfaz
          responsive garantiza una experiencia óptima desde cualquier
          dispositivo. ECMAS está construido con Next y Tailwind CSS en el
          frontend, Spring y Express en el backend, y utiliza MySQL según el
          despliegue. Además, integra APIs de sensores IoT y servicios de
          alertas, y se hospeda en la nube para acceso universal. El valor
          agregado de ECMAS radica en combinar tecnología y sostenibilidad,
          permitiendo decisiones informadas, aumentando la eficiencia y
          reduciendo el desperdicio de recursos, demostrando cómo la tecnología
          puede apoyar la agricultura y la investigación ambiental de forma
          práctica y escalable.
        </strong>
      </p>
      <video
        src={clipecmas}
        className="video-ecmas"
        autoPlay
        muted
        loop
        controls
      >
        Tu navegador no soporta la etiqueta <code>video</code>.
      </video>
    </div>
  );
};

export default ECMAS;

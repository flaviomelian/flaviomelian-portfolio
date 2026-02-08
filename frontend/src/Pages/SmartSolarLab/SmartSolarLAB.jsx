import React from "react";
import "./SmartSolarLAB.css";
import next from "../../assets/next.png";
import spring from "../../assets/springboot-inner.svg";
import mysql from "../../assets/mysql.jpg";
import clipeSmartSolarLab from "../../assets/clip-smart-solar-lab.mp4";

const SmartSolarLAB = () => {
  return (
    <div>
      <section className="solar-container">
        <h1 className="solar-title">SmartSolarLAB</h1>

        <div className="stack-smart-solar-lab">
          <img className="next-smart-solar-lab" src={next} />
          <img className="spring-smart-solar-lab" src={spring} />
          <img className="mysql-smart-solar-lab" src={mysql} />
        </div>

        <p className="solar-text">
          <strong className="solar-highlight">SmartSolarLAB</strong> es un
          laboratorio de simulación solar diseñado para comprender, analizar y
          explicar cómo la energía del Sol se transforma en electricidad dentro
          de un edificio. No depende de datos meteorológicos externos ni de
          predicciones opacas: se basa en{" "}
          <strong>modelos físicos deterministas</strong> y en la geometría real
          del sistema solar.
        </p>

        <p className="solar-text">
          El objetivo no es “adivinar el futuro”, sino ofrecer una{" "}
          <strong>referencia teórica clara</strong> que permita comparar
          escenarios, justificar decisiones técnicas y entender el impacto real
          de una instalación fotovoltaica antes de construirla.
        </p>

        <p className="solar-text">
          Este sistema es capaz de calcular la posición exacta del Sol según la
          latitud, el día y la hora para simular la irradiancia y la potencia
          fotovoltaica resultante. Gracias a esto, permite evaluar con precisión
          el autoconsumo, la gestión de excedentes y la energía importada,
          facilitando la comparativa entre distintas configuraciones de paneles.
        </p>

        <p className="solar-text">
          A diferencia de otras herramientas, SmartSolarLAB no depende de APIs
          externas y ofrece un modelo transparente y explicable. Su enfoque es
          puramente educativo y técnico, diseñado específicamente para la
          integración en <strong>Smart Buildings</strong> y entornos de
          formación especializada.
        </p>

        <p className="solar-text">
          La arquitectura está basada en una <strong>API REST</strong> que
          separa el modelo físico de la visualización. Esto permite que el motor
          de cálculo se integre fácilmente en plataformas educativas o sistemas
          complejos de análisis energético.
        </p>

        <p className="solar-text solar-footer-note">
          SmartSolarLAB no pretende sustituir sensores ni datos reales, sino
          responder a la pregunta fundamental:
          <strong> “¿Qué debería pasar según la física?”</strong>
        </p>
      </section>
      <video
        src={clipeSmartSolarLab}
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

export default SmartSolarLAB;

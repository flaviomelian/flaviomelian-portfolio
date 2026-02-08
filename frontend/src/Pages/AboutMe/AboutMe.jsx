import React from "react";
import './AboutMe.css';
import me from '../../assets/ME.png';

const AboutMe = () => {
    return (
        <main>
            <img src={me} alt="Flavio Melián" />
            <section className='container'>
                <h2 className='title'>Sobre mí</h2>
                <p className='paragraph'>
                    Soy una persona curiosa y proactiva, con la capacidad de adaptarme y encontrar soluciones de manera autónoma. Tras una experiencia universitaria diversa, completé un CFGS en Desarrollo de Aplicaciones Multiplataforma, donde los conocimientos adquiridos previamente me resultaron muy útiles. Me apasiona el mundo de la informática y me mantengo actualizado constantemente, explorando incluso áreas como sistemas, más allá de mi especialidad principal.
                </p>
                <p className='paragraph'>
                    Lo que me motiva de esta industria es que, aunque no sea magia, tiene algo realmente fascinante: la posibilidad de aprender nuevas tecnologías y aplicarlas para crear soluciones que aporten valor real. Comprender lo que hago me permite convertir ideas en aplicaciones funcionales y efectivas.
                </p>
                <p className='paragraph'>
                    Soy un profesional comprometido y responsable, capaz de equilibrar buen humor con seriedad cuando el proyecto lo requiere. Mi objetivo es desarrollar soluciones que faciliten la vida de las personas y aportar valor constante en los proyectos en los que participo. La combinación de rigor y creatividad define mi enfoque profesional.
                </p>
                <p className='paragraph'>
                    Si buscas a alguien que combine confianza, profesionalidad y compromiso, sin artificios ni poses, estás en el lugar indicado.
                </p>
            </section>
        </main>

    );
};

export default AboutMe;

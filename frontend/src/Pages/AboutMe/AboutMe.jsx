import React from "react";
import './AboutMe.css';
import me from '../../assets/me.jpeg';

const AboutMe = () => {
    return (
        <main>
            <img src={me}/>
            <section className='container'>
                <h2 className='title'>Sobre mí</h2>
                <p className='paragraph'>
                    Soy un culo inquieto con una curiosidad insaciable y la habilidad para buscarme la vida cuando toca. Pasé por la carrera de aquella manera, pero acabé en un CFGS de Desarrollo de Aplicaciones Multiplataforma, donde lo que pillé en la uni me ayudó bastante. Me interesa la industria de la informática al máximo y siempre estoy al día, incluso me he metido en sistemas, aunque no sea mi especialidad.
                </p>
                <p className='paragraph'>
                    Lo que me flipa de este mundo es que no es magia, pero se siente mágico: aprender tecnologías y aplicarlas para crear cosas que realmente resuelven problemas o necesidades. Cuando uno sabe lo que hace, se tiene el control total y se puede convertir cualquier idea en una app que funcione y mole.
                </p>
                <p className='paragraph'>
                    Soy un “niño grande” profesional: ácido y bromista dentro de unos límites, pero cuando toca, me lo tomo en serio y doy el 100%. Mi objetivo es vivir de esto y facilitar la vida a las personas con lo que hago. En lo personal puedo ser un travieso, pero soy buen amigo, y en lo profesional, bromeo, pero nunca fallo a la hora de sacar el trabajo adelante.
                </p>
                <p className='paragraph'>
                    Si buscas alguien que transmita seguridad, profesionalidad y confianza, pero sin florituras ni postureo, estás en el sitio correcto.
                </p>
            </section>
        </main>
    );
};

export default AboutMe;

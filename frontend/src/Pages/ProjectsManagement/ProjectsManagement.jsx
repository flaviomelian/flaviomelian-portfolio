import React from "react"
import pm1 from '../../assets/pm-1.jpg'
import pm2 from '../../assets/pm-2.jpg'
import pm3 from '../../assets/pm-3.jpg'
import pm4 from '../../assets/pm-4.jpg'
import pm5 from '../../assets/pm-5.jpg'
import pm6 from '../../assets/pm-6.jpg'
import pm7 from '../../assets/pm-7.jpg'
import pm8 from '../../assets/pm-8.jpg'
import pm9 from '../../assets/pm-9.jpg'
import pm10 from '../../assets/pm-10.jpg'
import pm11 from '../../assets/pm-11.jpg'
import spring from '../../assets/springboot-inner.svg'
import react from '../../assets/react.svg'
import bootstrap from '../../assets/bootstrap.png'
import mysql from '../../assets/mysql.jpg'
import './ProjectsManagement.css'

const ProjectsManagement = () => {
    return (
        <div className='projects-management'>
            <h2 className="devly">Devly</h2>
            <p><strong>Una aplicación para gestionar proyectos de desarrollo Scrum.</strong></p>
            <a href='' />
            <div className='stack-alt'>
                <img src={react} />
                <img src={spring} />
                <img className='mysql' src={mysql} />
            </div>
            <img className='bstrap-alt' src={bootstrap} />
            <div className='project-images-pm'>
                <img className='pm' src={pm1} />
                <img className='pm' src={pm2} />
                <img className='pm' src={pm3} />
                <img className='pm' src={pm4} />
                <img className='pm' src={pm5} />
                <img className='pm' src={pm6} />
                <img className='pm' src={pm7} />
                <img className='pm' src={pm8} />
                <img className='pm-data' src={pm9} />
                <div>
                    <img className='pm-alt' src={pm10} />
                    <img className='pm-alt' src={pm11} />
                </div>
            </div>
        </div>
    )
}

export default ProjectsManagement
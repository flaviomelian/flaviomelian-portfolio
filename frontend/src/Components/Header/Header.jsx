import React from 'react'
import { Link } from 'react-router-dom'
import home from '../../assets/home.png'
import contact from '../../assets/contact.png'
import project from '../../assets/project.png'
import mail from '../../assets/mail.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/"><img src={home} /></Link>
                <div>
                    <Link to="/sobre-mi"><img src={contact} /></Link>
                    <Link to="/proyectos"><img src={project} /></Link>
                    <Link to="/contacto"><img src={mail} /></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header

import React from 'react'
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
import pokimon from '../../assets/pokimon-app.png'
import pokimons from '../../assets/pokimons.png'
import pokimonTeam from '../../assets/pokimon-team.png'
import cookbookCooks from '../../assets/cookbook-cooks.jpeg'
import cookbookCookInfo from '../../assets/cookbook-cook-info.jpeg'
import cookbookFeed from '../../assets/cookbook-feed.jpeg'
import cookbookNew from '../../assets/cookbook-new.jpeg'
import wallpaper from '../../assets/wallpaper-generator.png'
import spring from '../../assets/springboot-inner.svg'
import react from '../../assets/react.svg'
import next from '../../assets/next.png'
import node from '../../assets/node.png'
import commandAppDashBoard from '../../assets/commandApp-dashboard.png'
import dailyMenu from '../../assets/daily-menu.png'
import getCommand from '../../assets/get-command.png'
import Commands from '../../assets/commands.png'
import CommandDetail from '../../assets/command-detail.png'
import TableStatus from '../../assets/table-status.png'
import menus from '../../assets/menus.png'
import dishes from '../../assets/dishes.png'
import homeMobile from '../../assets/home-mobile.jpg'
import dishesMobile from '../../assets/dishes.jpg'
import tablesMobile from '../../assets/tables-mobile.jpg'
import menusMobile from '../../assets/menus-mobile-details.jpg'
import burgerMenu from '../../assets/burger-menu.jpg'
import commandsMobile from '../../assets/comandas-mobile.jpg'
import mysql from '../../assets/mysql.jpg'
import python from '../../assets/python.png'
import extApi from '../../assets/external-api.png'
import odoo from '../../assets/odoo.png'
import odooPet from '../../assets/odoo-pet.png'
import dashboardOdooPet from '../../assets/dashboard-odoo-pet.png'
import formOdoo from '../../assets/form-odoo.png'
import './Projects.css'

const Projects = () => {
    return (
        <div className='projects-container'>
            <h1>Proyectos</h1>
            <div className='projects-page'>
                <div className='project'>
                    <h2>CommandApp</h2>
                    <p>Una aplicación para la gestión de comandas y menús en un restaurante.</p>
                    <a href='' />
                    <div className='stack-alt'>
                        <img src={next} />
                        <img src={node} />
                        <img src={mysql} />
                    </div>
                    <div className='project-images-pm'>
                        <img className='pm' src={commandAppDashBoard} />
                        <img className='pm' src={dailyMenu} />
                        <img className='pm' src={getCommand} />
                        <img className='pm' src={Commands} />
                        <img className='pm' src={CommandDetail} />
                        <img className='pm' src={TableStatus} />
                        <img className='pm' src={menus} />
                        <img className='pm' src={dishes} />

                    </div>
                    <div className="mobile">
                        <img className='pm' src={homeMobile} />
                        <img className='pm' src={burgerMenu} />
                        <img className='pm' src={dishesMobile} />
                        <img className='pm' src={tablesMobile} />
                        <img className='pm' src={menusMobile} />
                        <img className='pm' src={commandsMobile} />
                    </div>
                </div>
                <div className='project'>
                    <h2>Projects Management</h2>
                    <p>Una aplicación para gestionar proyectos de desarrollo Scrum.</p>
                    <a href='' />
                    <div className='stack-alt'>
                        <img src={react} />
                        <img src={spring} />
                        <img src={mysql} />
                    </div>
                    <div className='project-images-pm'>
                        <img className='pm' src={pm1} />
                        <img className='pm' src={pm2} />
                        <img className='pm' src={pm3} />
                        <img className='pm' src={pm4} />
                        <img className='pm' src={pm5} />
                        <img className='pm' src={pm6} />
                        <img className='pm' src={pm7} />
                        <img className='pm' src={pm8} />
                        <img className='pm' src={pm9} />
                        <div>
                            <img className='pm-alt' src={pm10} />
                            <img className='pm-alt' src={pm11} />
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <h2>Pókimon App</h2>
                    <p>Una aplicación para buscar información sobre Pokémon conectada con la PokéApi.</p>
                    <a href='' />
                    <div className='stack'>
                        <img src={react} />
                        <img src={extApi} />
                    </div>
                    <div className='project-images'>
                        <img className='pokimon' src={pokimon} />
                        <img className='pokimon' src={pokimons} />
                    </div>
                    <img className='team' src={pokimonTeam} />
                </div>
                <div className='project'>
                    <h2>Cookbook</h2>
                    <p>Una aplicación para compartir recetas online.</p>
                    <a href='' />
                    <div className='stack-alt'>
                        <img src={react} />
                        <img src={spring} />
                        <img src={mysql} />
                    </div>
                    <div className='project-images-cookbook'>
                        <img className='cooks' src={cookbookCooks} />
                        <img className='cooks' src={cookbookCookInfo} />
                        <img className='cooks' src={cookbookFeed} />
                        <img className='cooks' src={cookbookNew} />
                    </div>
                </div>
                <div className='project'>
                    <h2>Wallpaper Pattern Editor</h2>
                    <p>Una aplicación para generar fondos de pantalla basados en patrones de figuras.</p>
                    <img className='python' src={python} />
                    <a href='' />
                    <div className='project-images-wallpaper'>
                        <img className='wallpaper-editor' src={wallpaper} />
                    </div>
                </div>
                <div className='project'>
                    <h2>Odoo Pet</h2>
                    <p>Una aplicación en Odoo para gestionar la adopción de animales</p>
                    <div className='stack-odoo'>
                        <img className='python' src={python} />
                        <img className='python' src={odoo} />
                    </div>
                    <div className='project-images-odoo-pet'>
                        <img className='img-odoo-pet' src={odooPet} />
                        <img className='img-odoo-pet' src={dashboardOdooPet} />
                        <img className='img-odoo-pet' src={formOdoo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects

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
import mysql from '../../assets/mysql.jpg'
import pyhton from '../../assets/python.png'
import extApi from '../../assets/external-api.png' 
import './Projects.css'

const Projects = () => {
    return (
        <div className='projects-container'>
            <h1>Proyectos</h1>
            <div className='projects-page'>
                <div className='project'>
                    <h2>Projects Management</h2>
                    <p>Una aplicación para gestionar proyectos de desarrollo Scrum.</p>
                    <a href='' />
                    <div className='stack-alt'>
                        <img src={react}/>
                        <img src={spring}/>
                        <img src={mysql}/>
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
                    <div className='stack'> {/* este div no se ve (?????) */}
                        <img src={react}/>
                        <img src={extApi}/>
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
                        <img src={react}/>
                        <img src={spring}/>
                        <img src={mysql}/>
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
                    <img className='python' src={pyhton}/>
                    <a href='' />
                    <div className='project-images-cookbook'>
                        <img className='wallpaper-editor' src={wallpaper} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects

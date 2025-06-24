import React from 'react'
import pokimon from '../../assets/pokimon-app.png'
import pokimons from '../../assets/pokimons.png'
import pokimonTeam from '../../assets/pokimon-team.png'
import cookbookCooks from '../../assets/cookbook-cooks.jpeg'
import cookbookCookInfo from '../../assets/cookbook-cook-info.jpeg'
import cookbookFeed from '../../assets/cookbook-feed.jpeg'
import cookbookNew from '../../assets/cookbook-new.jpeg'
import './Projects.css'

const Projects = () => {
    return (
        <div className='projects-container'>
            <h1>Proyectos</h1>
            <div className='projects-page'>
                <div className='project'>
                    <h2>Pókimon App</h2>
                    <p>Una aplicación para buscar información sobre Pokémon conectada con la PokéApi.</p>
                    <a href='' />
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
                    <div className='project-images-cookbook'>
                        <img className='cooks' src={cookbookCooks} />
                        <img className='cooks' src={cookbookCookInfo} />
                        <img className='cooks' src={cookbookFeed} />
                        <img className='cooks' src={cookbookNew} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects

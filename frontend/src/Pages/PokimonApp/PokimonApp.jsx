import React from 'react'
import extApi from '../../assets/external-api.png'
import react from '../../assets/react.svg'
import pokimon from '../../assets/pokimon-app.png'
import pokimons from '../../assets/pokimons.png'
import pokimonTeam from '../../assets/pokimon-team.png'
import './PokimonApp.css'

const PokimonApp = () => {
    return (
        <div className='project'>
            <h2>Pókimon App</h2>
            <p><b>Una aplicación para buscar información sobre Pokémon conectada con la PokéApi.</b></p>
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
    )
}

export default PokimonApp

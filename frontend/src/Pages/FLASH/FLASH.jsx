import React from 'react'
import shellCpp from '../../assets/shell-c++.png'
import cpp from '../../assets/C++_Logo.png'
import './FLASH.css'

const FLASH = () => {
    return (
        <div className='project'>
            <h2>FLA$H</h2>
            <strong>Una shell minimalista que simula el comportamiento básico de una terminal de Unix/Linux usando procesos del sistema operativo.</strong>
            <div className='shell-cpp'>
                <img className="cpp" src={cpp} />
                <img className="shell" src={shellCpp} />
            </div>
        </div>
    )
}

export default FLASH

import React from 'react'
import bash from '../../assets/bash.png'
import ubuntu from '../../assets/ubuntu.png'
import bashScript1 from '../../assets/bash-script-1-1.png'
import bashScript2 from '../../assets/bash-script-1-2.png'
import bashScript3 from '../../assets/bash-script-1-3.png'
import effectBashScript from '../../assets/efecto-bash-script.png'
import './BackupScript.css'

const BackupScript = () => {
    return (
        <div className='project'>
            <h2>Autoejecutable para backups</h2>
            <p><strong>Un script para Linux en bash que permite crear copias de seguridad, paso a paso con un ejemplo.</strong></p>
            <a href='' />
            <div className='stack-alt bash'>
                <img src={bash} />
                <img src={ubuntu} />
            </div>
            <div className='bash-script'>
                <img src={bashScript1} />
                <img src={bashScript2} />
            </div>
            <img className='bash-script-img' src={bashScript3} />
            <p>El efecto es habernos creado una carpeta que anida el proyecto que queríamos respaldar, extensible a cualquier proyecto</p>
            <img className='bash-script-img' src={effectBashScript} />
        </div>
    )
}

export default BackupScript

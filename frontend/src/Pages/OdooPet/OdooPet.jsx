import React from 'react'
import python from '../../assets/python.png'
import odoo from '../../assets/odoo.png'
import odooPet from '../../assets/odoo-pet.png'
import dashboardOdooPet from '../../assets/dashboard-odoo-pet.png'
import formOdoo from '../../assets/form-odoo.png'
import './OdooPet.css'

const OdooPet = () => {
    return (
        <div className='project'>
            <h2>Odoo Pet</h2>
            <p><strong>Una aplicación en Odoo para gestionar la adopción de animales.</strong></p>
            <div className='stack-odoo'>
                <img className='python' src={python} />
                <img className='odoo' src={odoo} />
            </div>
            <div className='project-images-odoo-pet'>
                <img className='img-odoo-pet' src={odooPet} />
                <img className='img-odoo-pet' src={dashboardOdooPet} />
                <img className='img-odoo-pet' src={formOdoo} />
            </div>
        </div>
    )
}

export default OdooPet

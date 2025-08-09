import React from 'react'

import cookbookCooks from '../../assets/cookbook-cooks.jpeg'
import cookbookCookInfo from '../../assets/cookbook-cook-info.jpeg'
import cookbookFeed from '../../assets/cookbook-feed.jpeg'
import cookbookNew from '../../assets/cookbook-new.jpeg'
import spring from '../../assets/springboot-inner.svg'
import react from '../../assets/react.svg'
import mysql from '../../assets/mysql.jpg'
import './Cookbook.css'

const Cookbook = () => {
    return (
        <div className='project-cookbook'>
            <h2>Cookbook</h2>
            <p>Una aplicación para compartir recetas online.</p>
            <a href='' />
            <div className='stack-alt'>
                <img className="react-pm" src={react} />
                <img className="spring-pm" src={spring} />
                <img className='mysql-cb' src={mysql} />
            </div>
            <div className='project-images-cookbook'>
                <img className='cooks' src={cookbookCooks} />
                <img className='cooks' src={cookbookCookInfo} />
                <img className='cooks' src={cookbookFeed} />
                <img className='cooks' src={cookbookNew} />
            </div>
        </div>
    )
}

export default Cookbook

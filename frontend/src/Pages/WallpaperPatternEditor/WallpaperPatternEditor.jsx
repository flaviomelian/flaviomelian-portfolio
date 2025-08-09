import React from 'react'
import python from '../../assets/python.png'
import wallpaper from '../../assets/wallpaper-generator.png'
import './WallpaperPatternEditor.css'

const WallpaperEditor = () => {
  return (
    <div className='project'>
      <h2>Wallpaper Pattern Editor</h2>
      <p>Una aplicación para generar fondos de pantalla basados en patrones de figuras.</p>
      <img className='python-1' src={python} />
      <a href='' />
      <div className='project-images-wallpaper'>
        <img className='wallpaper-editor' src={wallpaper} />
      </div>
    </div>
  )
}

export default WallpaperEditor

import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx' // o donde tengas el archivo del router
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)


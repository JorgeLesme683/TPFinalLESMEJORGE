import React from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>

      <div className='header-contenedor'>

          <a href="https://vitejs.dev" target="_blank"><img src={viteLogo} className="logo" alt="Vite logo" /></a>

          <div>
              <h3 className='header-h3'>Desarrollador Web</h3>
              <h1 className='header-h1'>REACT JS</h1>
              
          </div>

          <a href="https://react.dev" target="_blank"><img src={reactLogo} className="logo react" alt="React logo" /></a>
        
      </div>
        
      <h1 className='header-lista'>TRABAJO PRACTICO DE LISTA DE TAREAS</h1>
      
        
    </div>
  )
}

export default Header
import React from 'react'
import './navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#technologies">Tecnologías</a></li>
        <li><a href="#studies">Estudios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Navigation


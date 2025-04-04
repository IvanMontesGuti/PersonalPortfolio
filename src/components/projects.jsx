import React from 'react'
import './projects.css'

function Projects() {
  return (
    <section className="projects" id="projects">
      <h3 className='project-name1'>// Projects</h3>
      <h2 className='project-name'>Mis proyectos.</h2>
      <div className="project-grid">
        <div className="project-card">
          <img src="/images/ecommerce-cap.webp" alt="E-commerce Project" />
          <h4>Proyecto E-Commerce.</h4>
          <p>Proceso CRUD: Gestión de inventario, cesta de compra, autenticación de usuarios con JWTbearer, gestión de reseñas. Documentación de APIS con SwaggerUI y control de versiones con Git.</p>
          <div className="project-tags">
            <span className="tag">Css</span>
            <span className="tag">.React</span>
            <span className="tag">.NET</span>
            <span className="tag">SQlite</span>
            <span className="tag">Figma</span>
            <span className="tag">Git</span>
            <span className="tag">SwaggerUI</span>
            <div className="cta-buttons2">
        <a href="https://bushido-beans.vercel.app/" target='_blank' ><button className="btn btn-outline">Visitar</button></a>
        <a href="https://github.com/Mikelpladu/BushidoBeans" target='_blank'><button className="btn btn-primary">Repositorio</button></a>
      </div>
      
            
          </div>
          
        </div>
        <div className="project-card">
          <img src="/images/port.webp" alt="Portfolio Project" />
          <h4>Proyecto Portfolio.</h4>
          <p>Diseño en figma con optimización del rendimiento, accesibilidad para todos los usuarios, creando una experiencia de usuario agradable en dispositivos móviles y de escritorio con un diseño responsive. </p>
          <div className="project-tags">
            <span className="tag">Css</span>
            <span className="tag">.React</span>
            <span className="tag">Figma</span>
            <div className="cta-buttons2">
        <a href=""  ><button className="btn btn-outline">Visitar</button></a>
        
      </div>
      
            
          </div>
          
        </div>
        <div className="project-card">
          <img src="/images/oca.png" alt="Real time Project" />
          <h4>Proyecto Juego Web Online.</h4>
          <p>Uso de WebSockets para el manejo de comunicaciones en tiempo real, gestión CRUD, base de datos con entity framework.</p>
          <div className="project-tags">
            <span className="tag">Next.js</span>
            <span className="tag">Typescript</span>
            <span className="tag">ASP.NET</span>
            <span className="tag">Tailwind CSS</span>
            <div className="cta-buttons2">

        <a href="https://github.com/IvanMontesGuti/Oca-Project" target='_blank'><button className="btn btn-primary">Repositorio</button></a>
        
      </div>
      
          </div>
          
          
        </div>
      </div>
    </section>
  )
}

export default Projects


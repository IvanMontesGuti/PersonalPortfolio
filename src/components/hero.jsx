import React from 'react'
import './hero.css'



function Hero() {


  return (
    <section className="hero" id="home">
      <h1>IVÁN MONTES<span className="accent">;</span></h1>
      <h2>Junior Web developer</h2>
      <p>Soy un estudiante de Desarrollo de aplicaciones web, disfruto de la programación como herramienta para transformar ideas en soluciones funcionales a través de la lógica y creatividad.
      </p>
      <div className="cta-buttons">
        <a href="/src/assets/pdf/cv.pdf" download="cv.pdf"><button className="btn btn-outline">CURRÍCULUM</button></a>
        <a href="#projects"><button className="btn btn-primary">PROYECTOS</button></a>
      </div>
    </section>
  )
}

export default Hero



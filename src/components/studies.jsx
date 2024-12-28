import React from 'react'
import './studies.css'

function Studies() {
  const studies = [
    {
      period: "2023-Actual",
      title: "Grado Superior Desarrollo de Aplicaciones Web",
      description: "desarrollar, implantar, y mantener aplicaciones web, con independencia del modelo empleado y utilizando tecnologías específicas, garantizando el acceso a los datos de forma segura y cumpliendo los criterios de accesibilidad, usabilidad y calidad exigidas en los estándares establecidos.",
    },
    {
      period: "2021-2023",
      title: "Bachillerato de Ciencias Sociales",
      description: "Formación, madurez intelectual y humana, conocimientos, habilidades y actitudes que le permitan desarrollar funciones sociales e incorporarse a la vida activa con responsabilidad y aptitud.",
    },
  ]

  return (
    <section className="studies" id="studies">
      <h3 className='studies-name1'>// Studies</h3>
      <h2 className='studies-name'>Mis estudios.</h2>
      <div className="studies-timeline">
        {studies.map((study, index) => (
          <div key={index} className="study-item">
            <u><div className="study-period">{study.period}</div></u>
            <div className="study-content">
              <h4>{study.title}</h4>
              <p>{study.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Studies


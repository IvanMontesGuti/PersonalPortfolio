import React from 'react'
import './technologies.css'


function Technologies() {


  const techs = [
    { name: "HTML", icon: "/public/images/html.svg" },
    { name: "CSS", icon: "/public/images/css.svg" },
    { name: "JavaScript", icon: "/public/images/js.svg" },
    { name: "React", icon: "/public/images/react.svg" },
    { name: ".NET", icon: "/public/images/asp.svg" },
    { name: "C#", icon: "/public/images/net.svg" },
    { name: "Java", icon: "/public/images/java.svg" },
    { name: "AWS", icon: "/public/images/aws.svg" },
    { name: "SQL Server", icon: "/public/images/sql.svg" },
    { name: "Figma", icon: "/public/images/figma.svg" },
    { name: "GitHub", icon: "/public/images/github.svg" },
    { name: "Git", icon: "/public/images/git.svg" },
  ]

  
  return (
    <section className="technologies" id="technologies">
      <h3 className='tech-name'>// Technologies</h3>
      <h2 className='tech-name1'>Mis tecnologías.</h2>
      <div className="tech-grid" >
        {techs.map((tech) => (
          <div key={tech.name} className="tech-item">
            <img src={tech.icon} alt={tech.name} />
            <div className="tech-name">{tech.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies


import React from 'react'
import './technologies.css'


function Technologies() {


  const techs = [
    { name: "HTML", icon: "/images/html.svg" },
    { name: "CSS", icon: "/images/css.svg" },
    { name: "JavaScript", icon: "/images/js.svg" },
    { name: "React", icon: "/images/react.svg" },
    { name: ".NET", icon: "/images/asp.svg" },
    { name: "C#", icon: "/images/net.svg" },
    { name: "Next.js", icon: "/images/next.svg" },
    { name: "Typescript", icon: "/images/types.svg" },
    { name: "Java", icon: "/images/java.svg" },
    { name: "AWS", icon: "/images/aws.svg" },
    { name: "SQL Server", icon: "/images/sql.svg" },
    { name: "Figma", icon: "/images/figma.svg" },
    { name: "GitHub", icon: "/images/github.svg" },
    { name: "Git", icon: "/images/git.svg" },
    { name: "Tailwind CSS", icon: "/images/tail.svg" },
    { name: "JSON Web Token", icon: "/images/jwt.svg" },
    { name: "WordPress", icon: "/images/word.svg" },
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


import React, {useState} from 'react'
import './Technologies.css'


function Technologies() {

    const [isHovered, setIsHovered] = useState(false);

  const techs = [
    { name: "HTML", icon: "../../public/html.svg" },
    { name: "CSS", icon: "../../public/css.svg" },
    { name: "JavaScript", icon: "../../public/js.svg" },
    { name: "React", icon: "../../public/react.svg" },
    { name: ".NET", icon: "../../public/asp.svg" },
    { name: "C#", icon: "../../public/net.svg" },
    { name: "Java", icon: "../../public/java.svg" },
    { name: "AWS", icon: "../../public/aws.svg" },
    { name: "SQL Server", icon: "../../public/sql.svg" },
    { name: "Figma", icon: "../../public/figma.svg" },
    { name: "GitHub", icon: "../../public/github.svg" },
    { name: "Git", icon: "../../public/git.svg" },
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


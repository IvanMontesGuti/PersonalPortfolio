import React from 'react'
import './contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <h3 className='contact-name'>// Contact</h3>
      <div className="contact-links">
        <a href="mailto:ivanmontesaguti@gmail.com" className="contact-item">
          <i className="icon-mail"></i>
          ivanmontesguti@gmail.com
          
        </a>
        <a href="https://www.linkedin.com/in/ivanmontesguti/" target='_blank' className="contact-item">
          <i className="icon-linkedin"></i>
          LinkedIn
          <img className='icon-linkedin' src="../../public/linkedin.svg" alt="linkedin logo" />
        </a>
        <a href="https://github.com/IvanMontesGuti" target='_blank' className="contact-item">
          <i className="icon-github"></i>
          GitHub
          <img className='icon-github' src="../../public/github.svg" alt="github logo" />
        </a>
      </div>
    </section>
  )
}

export default Contact


import React from 'react'
import me3 from '../../assets/pfp.jpg'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{VscFolderLibrary} from 'react-icons/vsc'

import "./about.css"

const About = () => {
  return (
    <section id='about'>
      <h5 className='about-h5'>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={me3} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>6+ Worked</small>
            </article>

          </div>

          <p>
          As a web developer, I am passionate about creating dynamic and user-friendly websites. My journey as a developer began with a curiosity about how websites are built and the desire to learn the necessary skills to build my own website. Through years of practice and experience, I have honed my skills as a MERN-Stack developer and other programming languages.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
import React from 'react'
import {GiCheckMark} from 'react-icons/gi'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li><GiCheckMark className='service__list-icon'/> <p>Landing pages</p></li>
            <li><GiCheckMark className='service__list-icon'/> <p>Clone Sites</p></li>
            <li><GiCheckMark className='service__list-icon'/> <p>PSD to HTML</p></li>
            <li><GiCheckMark className='service__list-icon'/> <p>Figma to HTML ...</p></li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li><GiCheckMark className='service__list-icon'/> <p>Well Optimized</p></li>
            <li><GiCheckMark className='service__list-icon'/> <p>Responsive Designs</p></li>
            <li><GiCheckMark className='service__list-icon'/> <p>SEO friendly code</p></li>
            <li><GiCheckMark className='service__list-icon'/> <p>Compatibility with ALL major browsers</p></li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Web Applications</h3>
          </div>

          <ul className='service__list'>
            <li><GiCheckMark className='service__list-icon'/> <p>Movie Websites</p></li>
            <li><GiCheckMark className='service__list-icon'/> <p> Real-Estate</p></li>
            <li><GiCheckMark className='service__list-icon'/> <p>Recipe Sites</p></li>
            <li><GiCheckMark className='service__list-icon'/> <p>Job portal apps...</p></li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
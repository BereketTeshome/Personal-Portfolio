import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/movie-database-croped.jpeg'
import IMG2 from '../../assets/recipeHome.PNG'
import IMG3 from '../../assets/ethioJobHome.PNG'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="movie" />
          </div>
            <h3>Movie Database</h3>

            <div className="portfolio__item-cta">
              <a href="https://github.com/BereketTeshome/movie-database" className='btn' target={'_blank'} rel="noreferrer">Github</a>
              <a href="https://www.upwork.com/freelancers/~013c18cc64d84ad32b?p=1655440306850177024" className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Recipe" />
          </div>
            <h3>Recipe Website</h3>

            <div className="portfolio__item-cta">
              <a href="https://github.com/BereketTeshome/Recipe-Website.git" className='btn' target={'_blank'} rel="noreferrer">Github</a>
              <a href="https://www.upwork.com/freelancers/~013c18cc64d84ad32b?p=1684122401818361856" className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="portfolio" />
          </div>
            <h3>Ethio Job</h3>

            <div className="portfolio__item-cta">
              <a href="https://github.com/BereketTeshome/Ethio-Jobs.git" className='btn' target={'_blank'} rel="noreferrer">Github</a>
              <a href="https://www.upwork.com/freelancers/~013c18cc64d84ad32b?p=1688500293268570112" className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
            </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio
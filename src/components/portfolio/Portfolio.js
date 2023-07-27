import React from 'react'
import './portfolio.css'
//import IMG1 from '../../assets/portfolio1.jpg'
// import IMG2 from '../../assets/portfolio2.jpg'
import IMG2 from '../../assets/home.PNG'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import movie from '../../assets/movie-database-croped.jpeg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={movie} alt="movie" />
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
            <h3>Portfolio Title</h3>

            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target={'_blank'} rel="noreferrer">Github</a>
              <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="portfolio" />
          </div>
            <h3>Portfolio Title</h3>

            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target={'_blank'} rel="noreferrer">Github</a>
              <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="portfolio" />
          </div>
            <h3>Portfolio Title</h3>

            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target={'_blank'} rel="noreferrer">Github</a>
              <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="portfolio" />
          </div>
            <h3>Portfolio Title</h3>

            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target={'_blank'} rel="noreferrer">Github</a>
              <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
            </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio
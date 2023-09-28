import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/recipeHome.PNG'
import IMG3 from '../../assets/ethioJobHome.PNG'
import IMG4 from '../../assets/DreamHome.PNG'
import IMG5 from '../../assets/AfroStore.PNG'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Recipe" />
          </div>
            <h3>Recipe Website</h3>

            <div className="portfolio__item-cta">
              <a href="https://github.com/BereketTeshome/Recipe-Website.git" className='btn' target={'_blank'} rel="noreferrer">Github</a>
              <a href="https://vimeo.com/868257886?share=copy" className='btn btn-primary' target={'_blank'} rel="noreferrer">Video Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="real estate" />
          </div>
            <h3>Dream Home</h3>

            <div className="portfolio__item-cta">
              <a href="https://github.com/BereketTeshome/Dream-Home.git" className='btn' target={'_blank'} rel="noreferrer">Github</a>
              <a href="https://vimeo.com/868261554?share=copy" className='btn btn-primary' target={'_blank'} rel="noreferrer">Video Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="portfolio" />
          </div>
            <h3>Ethio Job</h3>

            <div className="portfolio__item-cta">
              <a href="https://github.com/BereketTeshome/Ethio-Jobs.git" className='btn' target={'_blank'} rel="noreferrer">Github</a>
              <a href="https://vimeo.com/869062148?share=copy" className='btn btn-primary' target={'_blank'} rel="noreferrer">Video Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="portfolio" />
          </div>
            <h3>Afro Store</h3>

            <div className="portfolio__item-cta">
              <a href="https://github.com/BereketTeshome/Afro-Store.git" className='btn' target={'_blank'} rel="noreferrer">Github</a>
              <a href="https://vimeo.com/869063394?share=copy" className='btn btn-primary' target={'_blank'} rel="noreferrer">Video Demo</a>
            </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio
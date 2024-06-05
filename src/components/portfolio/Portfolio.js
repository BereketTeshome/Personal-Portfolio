import React from "react";
import "./portfolio.css";
import IMG2 from "../../assets/recipeHome.png";
import IMG3 from "../../assets/ethioJobHome.png";
import IMG4 from "../../assets/DreamHome.png";
import IMG5 from "../../assets/AfroStore.png";
import IMG6 from "../../assets/Flix_Search.png";
import IMG7 from "../../assets/erkab.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="portfolio" />
          </div>
          <h3>Ethio-Flix</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/BereketTeshome/Ethio-Flix.git"
              className="btn"
              target={"_blank"}
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://ethio-flix.vercel.app"
              className="btn btn-primary"
              target={"_blank"}
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="portfolio" />
          </div>
          <h3>Erkab-Consultancy</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/BereketTeshome/Erkab_Consulting"
              className="btn"
              target={"_blank"}
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://erkabconsulting.com"
              className="btn btn-primary"
              target={"_blank"}
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Recipe" />
          </div>
          <h3>Recipe Website</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/BereketTeshome/Recipe-Website.git"
              className="btn"
              target={"_blank"}
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://recipe-website-client.vercel.app"
              className="btn btn-primary"
              target={"_blank"}
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="real estate" />
          </div>
          <h3>Dream Home</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/BereketTeshome/Dream-Home.git"
              className="btn"
              target={"_blank"}
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dream-home-client.vercel.app"
              className="btn btn-primary"
              target={"_blank"}
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="portfolio" />
          </div>
          <h3>Ethio Job</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/BereketTeshome/Ethio-Jobs.git"
              className="btn"
              target={"_blank"}
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://ethio-jobs-client.vercel.app"
              className="btn btn-primary"
              target={"_blank"}
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="portfolio" />
          </div>
          <h3>Afro Store</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/BereketTeshome/Afro-Store.git"
              className="btn"
              target={"_blank"}
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://afro-store-client.vercel.app"
              className="btn btn-primary"
              target={"_blank"}
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

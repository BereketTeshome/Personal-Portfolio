import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./portfolio.css";
import IMG2 from "../../assets/recipeHome.png";
import IMG3 from "../../assets/ethioJobHome.png";
import IMG4 from "../../assets/DreamHome.png";
import IMG5 from "../../assets/AfroStore.png";
import IMG6 from "../../assets/Flix_Search.png";
import IMG7 from "../../assets/erkab.png";
import IMG8 from "../../assets/chart.PNG";
import IMG9 from "../../assets/ahazHome.PNG";

const portfolioItems = [
  {
    img: IMG6,
    title: "Ethio Flix",
    github: "https://github.com/BereketTeshome/Ethio-Flix.git",
    demo: "https://ethio-flix.vercel.app",
  },
  {
    img: IMG8,
    title: "Book Rent",
    github: "https://github.com/BereketTeshome/Book_Rent",
    demo: "https://book-rent-app.vercel.app",
  },
  {
    img: IMG9,
    title: "AHAZ Pharma",
    github: "https://github.com/BereketTeshome/Ahaz-Pharma",
    demo: "https://ahaz-web-app.vercel.app",
  },
  {
    img: IMG7,
    title: "Erkab Consultancy",
    github: "https://github.com/BereketTeshome/Erkab_Consulting",
    demo: "https://erkabconsulting.com",
  },
  {
    img: IMG4,
    title: "Dream Home",
    github: "https://github.com/BereketTeshome/Dream-Home.git",
    demo: "https://dream-home-client.vercel.app",
  },
  {
    img: IMG3,
    title: "Ethio Jobs",
    github: "https://github.com/BereketTeshome/Ethio-Jobs.git",
    demo: "https://ethio-jobs-client.vercel.app",
  },
  {
    img: IMG5,
    title: "Afro Store",
    github: "https://github.com/BereketTeshome/Afro-Store.git",
    demo: "https://afro-store-client.vercel.app",
  },
  {
    img: IMG2,
    title: "Recipe Website",
    github: "https://github.com/BereketTeshome/Recipe-Website.git",
    demo: "https://recipe-website-client.vercel.app",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4,
        duration: 1.5,
      },
    }),
  };

  return (
    <section id="portfolio" ref={ref}>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioItems.map(({ img, title, github, demo }, index) => (
          <motion.article
            className="portfolio__item"
            key={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={animationVariants}
            custom={index}
          >
            <div className="portfolio__item-image">
              <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

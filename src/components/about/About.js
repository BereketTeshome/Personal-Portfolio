import React, { useRef } from "react";
import me3 from "../../assets/pfp.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";
import { motion, useInView } from "framer-motion";

const About = () => {
  const view = useRef();
  const isInView = useInView(view, { once: true });

  const containerVariants = {
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 1.4 },
    },
    hidden: {
      x: "-100vw",
      opacity: 0,
      transition: { duration: 1.4 },
    },
  };

  return (
    <section id="about" ref={view}>
      <h5 className="about-h5">Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <motion.div
          className="about__me"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="about__me-img">
            <img src={me3} alt="About" />
          </div>
        </motion.div>

        <motion.div
          className="about__content"
          variants={containerVariants}
          initial="right"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="about__cards">
            <a href="#experience">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>4 Years</small>
              </article>
            </a>

            <a href="#portfolio">
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>20+ </small>
              </article>
            </a>

            <a href="#portfolio">
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>30+ Worked</small>
              </article>
            </a>
          </div>

          <p>
            As a Full-Stack engineer specializing in AI, DevOps, and complex
            backend systems, I am passionate about building intelligent,
            scalable, and high-performance applications. My journey began with
            curiosity about how software is built, and over the years I have
            evolved from web and mobile development into designing robust
            architectures, AI-powered features, and reliable infrastructure
            through continuous practice and real-world experience.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

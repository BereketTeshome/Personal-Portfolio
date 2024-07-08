import React from "react";
import "./header.css";
import CTA from "./CTA";
import me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { motion } from "framer-motion";

const containerVariants = {
  visible: {
    x: 0,
    y: 0,
    transition: { delay: 0.5, duration: 1 },
  },
  top: {
    y: "-100vh",
    transition: { delay: 1.5, duration: 2.5 },
  },
  bottom: {
    y: "100vh",
    transition: { delay: 1.5, duration: 2.5 },
  },
  right: {
    x: "100vw",
    transition: { delay: 1.5, duration: 2.5 },
  },
  left: {
    x: "-100vw",
    transition: { delay: 1.5, duration: 2.5 },
  },
};
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <motion.div
          variants={containerVariants}
          initial="top"
          animate="visible"
        >
          <h5>Hello I'm </h5>
          <h1>
            Bereket <span className="father-name">Teshome</span>
          </h1>
          <h5 className="text-light">Full-Stack Developer</h5>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="right"
          animate="visible"
        >
          <CTA />
        </motion.div>
        <HeaderSocials />

        <motion.div
          className="me"
          variants={containerVariants}
          initial="bottom"
          animate="visible"
        >
          <img src={me} alt="me" />
        </motion.div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

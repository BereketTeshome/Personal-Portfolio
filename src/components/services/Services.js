import React, { useRef } from "react";
import { GiCheckMark } from "react-icons/gi";
import { easeInOut, motion, useInView } from "framer-motion";
import "./services.css";

const Services = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: i === 1 ? 1.3 : 1.6,
      },
    }),
  };

  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <motion.article
          className="service"
          ref={ref1}
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"}
          variants={containerVariants}
          custom={0}
        >
          <div className="service_head">
            <h3>Mobile App Dev.</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiCheckMark className="service__list-icon" />{" "}
              <p>iOS and Android apps</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />{" "}
              <p>Cross-platform dev.</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />{" "}
              <p>UI/UX Design for mobile</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />{" "}
              <p>App Store submission</p>
            </li>
          </ul>
        </motion.article>

        <motion.article
          className="service"
          ref={ref2}
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
          variants={containerVariants}
          custom={1}
        >
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiCheckMark className="service__list-icon" />{" "}
              <p>Well Optimized</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />{" "}
              <p>Responsive Designs</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />{" "}
              <p>SEO friendly code</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />{" "}
              <p>Compatibility with ALL major browsers</p>
            </li>
          </ul>
        </motion.article>

        <motion.article
          className="service"
          ref={ref3}
          initial="hidden"
          animate={isInView3 ? "visible" : "hidden"}
          variants={containerVariants}
          custom={2}
        >
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiCheckMark className="service__list-icon" />{" "}
              <p>Movie Websites</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" /> <p>Real-Estate</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" /> <p>Recipe Sites</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />{" "}
              <p>Job portal apps...</p>
            </li>
          </ul>
        </motion.article>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import "./header.css";
import CTA from "./CTA";
import me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>
          Bereket <span className="father-name">Teshome</span>
        </h1>
        <h5 className="text-light">Full-Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

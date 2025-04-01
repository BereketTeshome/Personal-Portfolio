import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.upwork.com/freelancers/~013c18cc64d84ad32b"
        rel="noreferrer"
        target="_blank"
      >
        <SiUpwork />
      </a>
      <a
        href="https://www.linkedin.com/in/bereket-teshome-1345a0246"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/BereketTeshome"
        rel="noreferrer"
        target="_blank"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;

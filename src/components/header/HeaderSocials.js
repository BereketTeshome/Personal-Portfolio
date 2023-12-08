import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {SiUpwork} from 'react-icons/si';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/bereket-teshome-1345a0246" rel="noreferrer" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/BereketTeshome" rel="noreferrer" target='_blank'><FaGithub /></a>
        <a href="https://www.upwork.com/freelancers/~01d6a6a27b7465d674" rel="noreferrer" target='_blank'><SiUpwork /></a>
    </div>
  )
}

export default HeaderSocials
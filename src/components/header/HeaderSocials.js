import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {SiUpwork} from 'react-icons/si';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/bereket-teshome-1345a0246" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/BereketTeshome" target='_blank'><FaGithub /></a>
        <a href="https://www.upwork.com/freelancers/~013c18cc64d84ad32b" target='_blank'><SiUpwork /></a>
    </div>
  )
}

export default HeaderSocials
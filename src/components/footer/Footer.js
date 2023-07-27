import React from 'react'
import {ImFacebook} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>BEKI</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><ImFacebook className='footer-icons'/></a>
        <a href="https://instagram.com"><BsInstagram className='footer-icons'/></a>
        <a href="https://twitter.com"><FaTwitter className='footer-icons'/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; BEKI Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
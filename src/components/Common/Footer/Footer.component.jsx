import React from 'react';
import './Footer.css'

const Footer = () => (
  <footer className="text-center">
    {new Date().getFullYear()} - Jordan Nowicki - 
    Użyto API <a href="https://rawg.io/" target="_blank">rawg.io</a>
  </footer>
)

export default Footer;

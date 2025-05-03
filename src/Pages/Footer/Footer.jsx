import React from 'react';
import {FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import './Footer.css'; // Assuming the CSS is in a file called Footer.css

export const Footer = () => {
  return (
    <footer id="footer">
      <h1>
        <span>CITY </span>TAXI
      </h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus fugiat, ipsa quos nulla qui alias.</p>
      <div className="credit">
        <p>
          Designed By <a href="#">City Taxi</a>
        </p>
      </div>
      <div className="copyright">
        <p>&copy;Copyright City Texi. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

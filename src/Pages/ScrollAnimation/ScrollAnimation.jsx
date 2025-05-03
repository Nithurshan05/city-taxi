import React, { useEffect } from 'react';
import './ScrollAnimation.css';
import {NavBar} from '../NavBar/NavBar';
import car from './taxitaxi.png';
import {Home} from '../Home/Home';
import {About} from '../About/About';
import {Booking} from '../BookTaxi/BookTaxi';
import taxiImage from './taxi1.jpeg';
import {Footer} from '../Footer/Footer';

export const ScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const layer = document.querySelector('.layer');
      const value = window.scrollY;
      layer.style.left = value * 2 + 'px';
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='ScrollAnimationBody'>
      <div className="layer">
        <img src={car} className="taxi" alt="Taxi"/>
      </div>
      <section className="sec1" style={{ backgroundImage: `url(${taxiImage})` }}></section>
      <div className="taxt">
        <h2>Welcome to <span> City-Taxi</span></h2>
      </div>
      <section className="sec2">
        <NavBar/>
        <Home/>
        <About/>
        <Booking/>
        <Footer/>
      </section>
      
    </div>
  );
};

export default ScrollAnimation;

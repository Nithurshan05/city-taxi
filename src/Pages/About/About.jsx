import React, { useState } from 'react';
import './About.css';
import aboutImg from '../../Assets/Images/abouttaxi.jpg';

export const About = () => {
  // State to track whether the full paragraph is shown
  const [showFullText, setShowFullText] = useState(false);

  // Function to toggle the full paragraph
  const handleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <section className="about">
      <div className="aboutContainer">
        <div className="main-txt">
          <h1>
            About <span>Us</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-md-6 image-col">
            <div className="aboutCard">
              <img src={aboutImg}  alt="Taxi services overview" className="about-img" />
            </div>
          </div>
          <div className="col-md-6 content-col">
            <h2>How about Taxi Services</h2>
            <p>
              Welcome to CITY TAXI, your trusted and reliable transportation partner in Sri Lanka. 
              With years of experience in the industry, we are committed to providing safe, comfortable, and affordable taxi services to both locals and tourists.
              
              {!showFullText && <>...</>} {/* Show ellipsis when text is truncated */}
              
              {showFullText && (
                <>
                  Our fleet of well-maintained vehicles, driven by professional and courteous drivers, is available 24/7 to cater to all your transportation needs, 
                  whether it's a quick city ride, airport transfer, or an island-wide journey. We take pride in offering seamless service, ensuring punctuality, safety, and convenience. 
                  Explore Sri Lanka with us and enjoy the journey as much as the destination!
                </>
              )}
            </p>
            <button id="about-btn" onClick={handleReadMore} aria-label="Read more about us">
              {showFullText ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

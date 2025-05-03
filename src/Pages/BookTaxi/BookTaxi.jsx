import React from 'react';
import './BookTaxi.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import tuk from '../../Assets/Images/tuktuk.png';
import car from '../../Assets/Images/carmain.png';
import van from '../../Assets/Images/image1.png';

export const Booking = () => {
    // Google Map options
    const mapContainerStyle = {
        height: "400px",
        width: "100%"
    };

    const center = {
        lat: 6.9271,
        lng: 79.8612
    };

    return (
        <section className='bookingSection'>
            <div className='booking'>
            <h1>Taxi <span>Booking</span></h1>

            {/* Card Option */}
            <div className='bookCardContainer'>
      <div className='bookCard'>
        <img src={tuk} alt="TukTuk" className='bookCardImg' />
        <div className='bookCardBody'>
          <h3>Tuk Tuk</h3>
          <p>3 Passengers, Small Luggage, Available 24/7</p>
          <h6>Charge: <strong> Rs.50/1km</strong></h6>
          <a href="#book" className='bookNow'>Book Now</a>
        </div>
      </div>
      <div className='bookCard'>
        <img src={car} alt="Car Taxi" className='bookCardImg' />
        <div className='bookCardBody'>
          <h3>Car Taxi</h3>
          <p>5 Passengers, 'Medium Luggage, Air Conditioning</p>
          <h6>Charge: <strong>Rs.85/1km</strong></h6>
          <a href="#book" className='bookNow'>Book Now</a>
        </div>
      </div>
      <div className='bookCard'>
        <img src={van} alt="Van Taxi" className='bookCardImg' />
        <div className='bookCardBody'>
          <h3>Van Taxi</h3>
          <p>10 Passengers, Large Luggage, Available for Group Trips</p>
          <h6>Charge: <strong>Rs.150/1km</strong></h6>
          <a href="#book" className='bookNow'>Book Now</a>
        </div>
      </div>
    </div>

    {/* Booking Form */}
        <div className="booking-container">
            <div className="booking-form">
                <form>
                    <div className="input-box">
                        <label htmlFor="from-location">From Location</label>
                        <input type="text" id="from-location" placeholder="Enter pickup location" required />
                        <FaMapMarkerAlt className="icon" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="to-location">To Location</label>
                        <input type="text" id="to-location" placeholder="Enter destination" required />
                        <FaMapMarkerAlt className="icon" />
                    </div>
                    <button type="submit" className="book-now-btn">Book Now</button>
                </form>
            </div>

            <div className="google-map">
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"> {/* Add your Google Maps API key */}
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={12}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
        </div>
        </section>
    );
};

export default Booking;

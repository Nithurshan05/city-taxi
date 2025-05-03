import carImage from '../../Assets/Images/HomeTaxi.png';
import './Home.css'; // Import the corresponding CSS file

export const Home = () => {
  return (
    <div className="home">
      <div className="avatar">
        <img src={carImage} alt="Avatar" className="avatar-img" />
      </div>
      <div className="content">
        <h5>Hello Guy's</h5>
        <h1>
          Book you taxi from anywhere today!
        </h1>
        <p>Everything your taxi bussiness needs is already here!
            CITY TAXI made for taxi service companies!
        </p>
        <a href="#contact">Book Now</a>
      </div>
    </div>
  );
};

export default Home;

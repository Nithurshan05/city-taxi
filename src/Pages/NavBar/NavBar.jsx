import './NavBar.css';
import profile from '../../Assets/Images/tony.jpeg';
import { useNavigate, Outlet, Link } from 'react-router-dom';

export const NavBar = () => {

  const navigate = useNavigate();

  return (
    <div className='nav'>
        <div className='nav-logo'>CITY <span>TAXI</span></div>
        <ul className='nav-menu'>
            <li><a href="Home" onClick={()=>navigate('Home')}>Home</a></li>
            <li><a href="About" onClick={()=>navigate('About')}>About</a></li>
            <li><a href="#">Book-Taxi</a></li>
            <li><a href="#">Records</a></li>
            <li><a href="#">Wish-List</a></li>
        </ul>
        <div className='nav-profile'>
        <span className='profile-name'>Tony Stak</span>
            <img src={profile} alt="Profile" className='profile-pic' />
        </div>
    </div>
  )
}

export default NavBar;


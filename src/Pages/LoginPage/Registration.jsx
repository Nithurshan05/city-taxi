import './Registration.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React from 'react';
import TaxiLogo from '../../Assets/Images/cititaxi.png';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

export const Registration = () => { 

    const navigate = useNavigate();
    return (
        <div className='RegBody'>
            <div className='logo'>
                <img src={TaxiLogo} alt='Logo' />
            </div>

        <div className='RegWrapper'>
            <div className='from-box register'>
                <form action=''>
                    <h1>Registration</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='Email' required />
                        <MdEmail className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className='remember-forgot'>
                        <label>
                            <input type="checkbox" /> I agree to the terms & conditions
                        </label>
                    </div>
                    <button type='submit'>Register Now</button>
                    <div className='register-link'>
                    <p>Already have an account? <a href='' onClick={()=>navigate('Login')} >Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Registration;

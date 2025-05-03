import './ForgotPassword.css'; 
import { MdEmail } from "react-icons/md";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TaxiLogo from '../../Assets/Images/cititaxi.png';

export const ForgotPassword = () => { 
    const navigate = useNavigate();

    return (
        <div className='FgtBody'>
            <div className='logo'>
                <img src={TaxiLogo} alt='Logo' />
            </div>
        <div className='FgtWrapper'>
            <div className='from-box ForgotPassword'>
                <form action=''>                    
                    <h1>Forgot Password?</h1>
                    <div className='EnterEmail'>
                        <p> Please Enter your Email Below</p>
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='Email' required />
                        <MdEmail className='icon' />
                    </div>
                    <button type='submit'>Send Code</button>
                    <div className='ForgotPassword-link'>
                        <p>Back To <a href='#' onClick={()=>navigate('Login')} >Login</a></p> 
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default ForgotPassword;

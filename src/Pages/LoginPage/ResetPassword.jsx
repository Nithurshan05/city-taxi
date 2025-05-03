import './ResetPassword.css'; 
import {  FaLock } from "react-icons/fa";
import React from 'react';
import TaxiLogo from '../../Assets/Images/cititaxi.png';

export const ResetPassword = () => { 
    return (
        <div className='RPbody'>
            <div className='logo'>
                <img src={TaxiLogo} alt='Logo' />
            </div>
        <div className='RPwrapper'>
            <div className='from-box Reset'>
                <form action=''>                    
                    <h1>Reset Password</h1>                   
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Confirm Password' required />
                        <FaLock className='icon' />
                    </div>
                    <button type='submit'>Reset Now</button>
                    <div className='Reset-link'>
                        <p>Back To <a href='#' >Login</a></p> 
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default ResetPassword;

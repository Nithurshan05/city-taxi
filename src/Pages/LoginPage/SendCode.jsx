import './SendCode.css'; 
import { TbCodeAsterisk } from "react-icons/tb";
import React from 'react';
import TaxiLogo from '../../Assets/Images/cititaxi.png';

export const SendCode = () => { 
    return (
        <div className='SCbody'>
            <div className='logo'>
                <img src={TaxiLogo} alt='Logo' />
            </div>
        <div className='SCwrapper'>
            <div className='from-box Reset'>
                <form action=''>                    
                    <h1>Verify Code</h1>                   
                    <div className='input-box'>
                        <input  placeholder='# # # #' required />
                        <TbCodeAsterisk className='icon' />
                    </div>
                    <button type='submit'>Verify Code</button>
                    <div className='SendCode-link'>
                        <p>Back To <a href='#' >Forgot Password</a></p> 
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default SendCode;

import './Login.css';
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState } from 'react';
import TaxiLogo from '../../Assets/Images/cititaxi.png';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handlePasswordInput = (event) => {
        setIsTyping(event.target.value.length > 0);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const password = event.target.password.value;
        const correctPassword = "123"; // Placeholder for actual password check

        if (password !== correctPassword) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
            // Proceed with login
        }
    };

    return (
        <div className='LoginBody'>
            <div className='logo'>
                <img src={TaxiLogo} alt='Logo' />
            </div>
            <div className='LoginWrapper'>
                <div className='form-box login'>
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>

                        {/* Combo Box */}
                        <div className='input-box'>
                            <select className="custom-select">
                            <option value="" disabled selected>Select Role</option>
                                <option>Admin</option>
                                <option>Passenger</option>
                                <option>Vehicle Owner</option>
                                <option>Telephone Operator</option>
                            </select>
                        </div>

                        <div className='input-box'>
                            <input type="text" placeholder='Username' required />
                            <FaUser className='icon' />
                        </div>

                        <div className={`input-box ${passwordError ? 'error' : ''}`}>
                            {isTyping && (
                                passwordVisible ? (
                                    <FaEyeSlash className="toggle-icon" onClick={togglePasswordVisibility} />
                                ) : (
                                    <FaEye className="toggle-icon" onClick={togglePasswordVisibility} />
                                )
                            )}
                            <input
                                type={passwordVisible ? "text" : "password"}
                                name="password"
                                placeholder='Password'
                                required
                                onChange={handlePasswordInput}
                            />
                            <FaLock className='icon' />
                        </div>

                        <div className='remember-forgot'>
                            <label>
                                <input type="checkbox" /> Remember Me
                            </label>
                            <a href=''>Forgot Password?</a>
                        </div>
                        <button type='submit'>Login</button>

                        <div className='register-link'>
                            <p>Don't have an account? <a href=''>Register Now</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

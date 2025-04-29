import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginComponents = () => {
  const [formData, setFormData] = useState({
    identifier: '', 
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.identifier.trim()) {
      newErrors.identifier = 'Email or phone number is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate login success
      toast.success('Login successful!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.log('Login Data:', formData);
      navigate('/dashboard'); 
    }
  };

  const handleWhats = () => {
   
    toast.info('Facebook login functionality not implemented in this example.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    console.log('Attempting Facebook login');
  };

  return (
    <>
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-header">
          <h1> My Chat Web Applications </h1>
          <p>Welcome back!</p>
        </div>
        <div className="login-form">
          <h2>Log In</h2>
          <form onSubmit={handleSubmit} className="form-inputs">
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input type="text" name="identifier" value={formData.identifier} onChange={handleChange} placeholder="Email or phone number" className={errors.identifier ? 'input-error' : ''} />
              {errors.identifier && <p className="error-message">{errors.identifier}</p>}
            </div>
            <div className="input-group">
              <FaLock className="input-icon" /> <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} placeholder="Password" className={errors.password ? 'input-error' : ''} />
              <button type="button" className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>
            <button type="submit" className="submit-button">Log In
            </button>
          </form>
          <div className="separator">
            <span>OR</span>
          </div>
          <button className="facebook-login-button" onClick={handleWhats}>
            <FaWhatsapp className="facebook-icon" /> <Link to={"/"}>Create new account</Link>
          </button>
          <div className="forgot-password">
            <Link to="/Forgotten">Forgot password?</Link>
          </div>
          <div className="signup-link">
            Don't have an account? <Link to="/">Registrations</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
 };

 export default LoginComponents;
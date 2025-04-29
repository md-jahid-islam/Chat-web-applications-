import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgottenComponents = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [requestSent, setRequestSent] = useState(false);

  const handleChange = (e) => {
    setEmailOrPhone(e.target.value);
    if (errors.emailOrPhone) {
      setErrors({ ...errors, emailOrPhone: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!emailOrPhone.trim()) {
      newErrors.emailOrPhone = 'Email or phone number is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      //======== Simulate sending reset link ==========//
      console.log('Requesting password reset for:', emailOrPhone);
      toast.success('Password reset link sent to your email/phone!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setRequestSent(true);
    }
  };

  const handleForgotPassword = () => {
    toast.info('Facebook forgot password functionality not implemented in this example.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    console.log('Attempting Facebook forgot password');
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-wrapper">
        <div className="forgot-password-header">
          <h1>Chat Web</h1>
          <p>Trouble logging in?</p>
        </div>
        <div className="forgot-password-form">
          <h2>Find Your Account</h2>
          {requestSent ? (
            <div className="reset-instructions">
              <p>We have sent a password reset link to your email address or phone number.</p>
              <p>Please check your inbox (including spam folder) or your messages.</p>
              <div className="back-to-login">
              <Link to="/login">Back to Log In</Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-inputs">
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input type="text" name="emailOrPhone" value={emailOrPhone} onChange={handleChange} placeholder="Email or phone number" className={errors.emailOrPhone ? 'input-error' : ''} />
                {errors.emailOrPhone && <p className="error-message">{errors.emailOrPhone}</p>}
              </div>
              <button type="submit" className="submit-button"> Send Reset Link
              </button>
            </form>
          )}
          <div className="separator">
            <span>OR</span>
          </div>
          <button className="facebook-forgot-password-button" onClick={handleForgotPassword}>
            <FaWhatsapp className="facebook-icon" />
            <Link to={"/Login"}>Back to Log In</Link>
          </button>
          <div className="back-to-login-bottom">
            <Link to="/login">Back to Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgottenComponents;
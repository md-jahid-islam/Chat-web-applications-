import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const VerifyOtpComponents = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, event) => {
    const { value } = event.target;
    const newOtp = [...otp];

    if (isNaN(value)) return;

    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    //====Move to the next input if a digit is entered=====// 
    if (value && index < 4 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace') {
      if (!otp[index] && index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    console.log('Entered OTP:', enteredOtp);
  };

  const handleResendOtp = () => {
    console.log('Resending OTP');
  };

  return (
    <div className="verify-otp-container">
      <div className="verify-otp-wrapper">
        <div className="verify-otp-header">
          <h1>Verify OTP</h1>
          <p>Please enter the 4-digit code sent to your email/phone.</p>
        </div>
        <div className="verify-otp-form">
          <form onSubmit={handleSubmit} className="otp-input-group">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text" maxLength="1" value={digit} onChange={(event) => handleChange(index, event)} onKeyDown={(event) => handleKeyDown(index, event)} ref={(input) => (inputRefs.current[index] = input)} className="otp-input"/>
            ))}
            <button type="submit" className="submit-button"> Verify OTP
            </button>
          </form>
          <div className="resend-otp">
            Didn't receive the code? <button type="button" onClick={handleResendOtp} className="resend-button">Resend OTP</button>
          </div>
          <div className="back-to-login">
            <Link to="/login">Back to Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
 };

 export default VerifyOtpComponents;
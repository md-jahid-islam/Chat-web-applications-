import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock, FaCalendarAlt, FaVenusMars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const RegistrationsComponents = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    gender: '',
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email or phone number is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && !/^[0-9]{10,15}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email or phone number';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.birthDate) {
      newErrors.birthDate = 'Birth date is required';
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

    if (!formData.terms) {
      newErrors.terms = 'You must accept the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success('Registration successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      //===In a real application, you would send this data to your backend//===
      console.log('Form Data Submitted:', formData);

      //=========== Reset form ==========//
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        birthDate: '',
        gender: '',
        terms: false
      });
      setErrors({});
    }
  };

  return (
    <>
    <div className="registration-container"> 
      <div className="registration-wrapper"> 
        {/* Header */}
        <div className="registration-header">
          <h1> My Chat Web Applications </h1>
          <p>Connect with friends and the world around you</p>
        </div>

        {/* Form */}
        <div className="registration-form">
          <h2>Create a New Account</h2>

          <form onSubmit={handleSubmit} className="form-inputs">
            {/* Name Fields */}
            <div className="input-group-grid">
              <div className="input-group">
                <FaUser className="input-icon" />
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className={errors.firstName ? 'input-error' : ''} />
                {errors.firstName && <p className="error-message">{errors.firstName}</p>}
              </div>

              <div className="input-group"> 
              <FaUser className="input-icon" /> <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className={errors.lastName ? 'input-error' : ''} />
              {errors.lastName && <p className="error-message">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email/Phone */}
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email or phone number" className={errors.email ? 'input-error' : ''} />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="input-group">
              <FaLock className="input-icon" />
              <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} placeholder="New password" className={errors.password ? 'input-error' : ''} />
          
              <button type="button" className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)} >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="input-group">
              <FaLock className="input-icon" />
              <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm password" className={errors.confirmPassword ? 'input-error' : ''} />
              <button type="button" className="password-toggle-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </div>

            {/* Birth Date */}
            <div className="input-group">
              <FaCalendarAlt className="input-icon" />
              <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} className={errors.birthDate ? 'input-error' : ''} />
              {errors.birthDate && <p className="error-message">{errors.birthDate}</p>}
            </div>

            {/* Gender */}
            <div className="input-group">
              <FaVenusMars className="input-icon" />
              <select
                name="gender" value={formData.gender} onChange={handleChange} className={errors.gender ? 'input-error' : ''} >
                <option value="">Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="custom">Custom</option>
              </select>
              {errors.gender && <p className="error-message">{errors.gender}</p>}
            </div>

            {/* Terms */}
            <div className="terms-group">
              <input type="checkbox" name="terms" id="terms" checked={formData.terms} onChange={handleChange} className={errors.terms ? 'input-error' : ''}/>
              <label htmlFor="terms">
                I agree to the <Link to="#">Terms</Link>, <Link to="#">Privacy Policy</Link>, and <Link to="#">Cookie Policy</Link>
                You may receive SMS notifications from us and can opt out at any time.
                </label>
              {errors.terms && <p className="error-message">{errors.terms}</p>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-button">
              Sign Up
            </button>

            <div className="privacy-note">
              <p>People who use our service may have uploaded your contact  <br /> information to Chat Web.<Link to="#">Learn more</Link>.</p>
            </div>
            <div className="login-link">
            <Link to="/login">Already have an account? Log In</Link>
            </div>

          </form>
        </div>
      </div>
    </div>   
    </>
  );
 };

 export default RegistrationsComponents;
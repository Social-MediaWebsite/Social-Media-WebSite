import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/authContext';
import './css/Signup.css';
import image from '../assets/letter1.png';

function Signup() {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await axios.post('http://localhost:3000/register', {
        userName: formData.get('userName'),
        userEmail: formData.get('userEmail'),
        userPassword: formData.get('userPassword'),
      });
      // console.log("register",response.data);
      const {userEmail,userName,token, userId} = response.data;
      console.log("id",userId);

      if (userEmail && userName && token) {
        setToken(token);
        setSuccessMessage('Registration successful!');
        setErrorMessage('');

        navigate(`/Home/${userId}`); // id is done successfully
        
      } else {
        setSuccessMessage('');
        setErrorMessage('Registration failed. Please try again.');
      }

    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Error during registration. Please try again.');
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <img src={image} alt="Lock Icon" className="lock-icon" />
        <h2 className="title">Sign up</h2>
        <form onSubmit={handleSignup} className="form">
          <label className="label">
            User Name:
            <input type="text" name="userName" required className="input" />
          </label>

          <label className="label">
            Email Address:
            <input type="email" name="userEmail" required className="input" />
          </label>
          <label className="label">
            Password:
            <input type="password" name="userPassword" required className="input" />
          </label>
          <button type="submit" className="button">
            Sign Up
          </button>
        </form>
          {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}
        <p className="create-account-link">
          Already have an account? <a href="/">Sign in here</a>.
        </p>
      </div>
    </div>
  );
}

export default Signup;

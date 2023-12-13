import React from 'react';
import './css/Signup.css'
import image from  '../assets/letter1.png'

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log({
      userName: formData.get('userName'),
      userEmail: formData.get('userEmail'),
      userPassword: formData.get('userPassword'),
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <img
          src={image}
          alt="Lock Icon"
          className="lock-icon"
        />
        <h2 className="title">Sign up</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="label">
            User Name :
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
        <p className="create-account-link">
          Already have an account? <a href="/">Sign in here</a>.
        </p>
      </div>
    </div>
  );
}

export default Signup;

import React from 'react';
import './css/Authentification.css'
import image from  '../assets/letter1.png'

function Authentification() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log({

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
        <h2 className="title">Sign in</h2>
        
        <form onSubmit={handleSubmit} className="form">

          <label className="label">
            Email Address:
            <input
              type="email"
              name="userEmail"
              required
              className="input"
            />
          </label>
          <label className="label">
            Password:
            <input
              type="password"
              name="userPassword"
              required
              className="input"
            />
          </label>
          <button type="submit" className="button" >
            Sign In
          </button>
          <p className="create-account-link">
            Don't have an account? <a href="/signup">Create one here</a>.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Authentification;

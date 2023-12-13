import React from 'react'
import { NavLink} from 'react-router-dom';
import image from '../assets/letter1.png'

function Navbar() {
  return (
    <div>

<header>
        <nav className="navbar">
          <img src={image} alt="Logo" className="logo"/>
          <div className="nav-links">
            <NavLink to={'/'} className="nav-link">Login</NavLink>
            <NavLink to={'/Home'} className="nav-link">Home</NavLink>
            <NavLink to={'/Posts'} className="nav-link">Posts</NavLink>
            <NavLink to={'/Profile'} className="nav-link">Profile</NavLink>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
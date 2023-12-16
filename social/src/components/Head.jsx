import React from 'react'
import { NavLink} from 'react-router-dom';
import image from '../assets/letter1.png'
import { IoSearch } from "react-icons/io5";

function Head({id}) {
  return (
    <header>
        <nav className="navbar">
          <img src={''} alt="Logo" className="logo"/>
          <div className="nav-search">
          <IoSearch />
          <input type="search" placeholder='hello' />
          </div>
          <div className="nav-links">
            <NavLink to={'/'} className="nav-link">Login</NavLink>
            <NavLink to={`/Home/${id}`} className="nav-link">Home</NavLink>
            <NavLink to={'/Friends'} className="nav-link">Friends</NavLink>
            {/* <NavLink to={'/Profile'} className="nav-link">Profile</NavLink> */}
            <NavLink to={'/UserProfile'} className="nav-link">Your Profile</NavLink>
          </div>
        </nav>
      </header>
  )
}

export default Head
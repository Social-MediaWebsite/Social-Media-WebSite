import React from 'react'
import { NavLink} from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import logo from '../assets/logos.png'

function Head({userData,id}) {
  console.log(id)
  return (
    <header>
        <nav className="navbar">
          <img src={logo} alt="Logo" className="logo"/>
          <div className="nav-search">
          <IoSearch />
          <input type="search" placeholder='hello' />
          </div>
          <div className="nav-links">
            <NavLink to={`/Home/${id}`} className="nav-link">Home</NavLink>
            <NavLink to={'/Friends'} className="nav-link">Friends</NavLink>
            <NavLink to={'/Logout'} className="nav-link">Logout</NavLink> 
            <NavLink to={'/UserProfile'} className="nav-link"><img src={userData?.userImage} alt="no" /></NavLink>
          </div>
        </nav>
      </header>
  )
}

export default Head
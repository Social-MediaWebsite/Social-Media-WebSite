import React from 'react'
import { NavLink} from 'react-router-dom';
import image from '../assets/letter1.png'

function Navbar() {
  return (
    <header className='navbar-content'>
      <div className='userInfo'>
        <img src="userImage"  alt="" />
      <h2>userName</h2>
      </div>
        <nav className="navbar-links">
            <NavLink to={'/Home'} className="navbar-link">Home</NavLink>
            <div className='line'/>
            <NavLink to={'/Posts'} className="navbar-link">Posts</NavLink>
            <div className='line'/>
            <NavLink to={'/Friends'} className="navbar-link">Friends</NavLink>
            <div className='line'/>
            {/* <NavLink to={'/Profile'} className="navbar-link">Profile</NavLink> */}
            <div className='line'/>
            <NavLink to={'/UserProfile'} className="nav-link">Your Profile</NavLink>
            <div className='navbar-link'>Contact us</div>
             
        </nav>
      </header>
  )
}

export default Navbar
import React,{useState,useEffect}from "react"
import './App.css';
import {NavLink,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Posts from './components/Posts';
// import Authentification from './components/Authentification';
import Login from './components/Login';
import Signup from './components/Signup';
import axios from 'axios';
import Friends from "./components/Friends";
import UserProfile from "./components/UserProfile";

function App() {
  const [data,setData]=useState([])
  const [friends,setFriends]=useState([])

  useEffect(()=>{
     axios.get('http://localhost:3000/api/socialMedia/users').then((ress)=>{
      console.log(ress.data)
      setData(ress.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])

  useEffect(()=>{
    axios.get('http://localhost:3000/api/socialMedia/friends/2').then((ress)=>{
     console.log(ress.data)
     setFriends(ress.data)
   }).catch((error)=>{
     console.log(error)
   })
 },[])

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <img src={''} alt="Logo" className="logo"/>
          <div className="nav-search">
          <IoSearch />
          <input type="search" placeholder='hello' />
          </div>
          <div className="nav-links">
            <NavLink to={'/'} className="nav-link">Login</NavLink>
            <NavLink to={'/Home'} className="nav-link">Home</NavLink>
            <NavLink to={'/Friends'} className="nav-link">Friends</NavLink>
            {/* <NavLink to={'/Profile'} className="nav-link">Profile</NavLink> */}
            <NavLink to={'/UserProfile'} className="nav-link">Your Profile</NavLink>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Home/:id' element={<Home />} />
        <Route path='/Friends' element={<Friends data={friends}/>}/>
        {/* <Route path='/Profile' element={<Profile />} /> */}
        <Route path='/Posts' element={<Posts />} />
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/UserProfile' element={<UserProfile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

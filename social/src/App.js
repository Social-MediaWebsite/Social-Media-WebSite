import React,{useState,useEffect}from "react"
import './App.css';
import {NavLink,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Posts from './components/Posts';
import Authentification from './components/Authentification';
import Signup from './components/Signup';
import axios from 'axios';

function App() {
  const [data,setData]=useState([])


  useEffect(()=>{
     axios.get('http://localhost:3000/api/socialMedia/users').then((ress)=>{
      console.log(ress.data)
      setData(ress.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <img src={''} alt="Logo" className="logo"/>
          <div className="nav-links">
            <NavLink to={'/'} className="nav-link">Login</NavLink>
            <NavLink to={'/Home'} className="nav-link">Home</NavLink>
  
            <NavLink to={'/Profile'} className="nav-link">Profile</NavLink>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Authentification />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Posts' element={<Posts />} />
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

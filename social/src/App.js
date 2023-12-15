import React,{useState,useEffect}from "react"
import './App.css';
import {NavLink,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Posts from './components/Posts';
import { useParams } from 'react-router-dom';
// import Authentification from './components/Authentification';
import Login from './components/Login';
import Signup from './components/Signup';
import axios from 'axios';
import Friends from "./components/Friends";
import UserProfile from "./components/UserProfile";
import { IoSearch } from "react-icons/io5";

function App() {
  const [data,setData]=useState([])
  const [friends,setFriends]=useState([])
  const [userData, setUserData] = useState(null);
  const [id,setId]=useState(0)
  // const { ids } = useParams(); //id is getting well
  // console.log("id",id);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/socialMedia/users/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        // console.log("resss",response.data)

        setUserData(response.data);
        console.log("user",userData);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserData();
    
  }, [id]); 

  useEffect(()=>{
     axios.get('http://localhost:3000/api/socialMedia/users').then((ress)=>{
      console.log(ress.data)
      setData(ress.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])

  useEffect(()=>{
    axios.get(`http://localhost:3000/api/socialMedia/friends/${id}`).then((ress)=>{
     console.log("friends",ress.data)
     setFriends(ress.data)
   }).catch((error)=>{
     console.log(error)
   })
 },[id])
console.log("id",id)

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
            <NavLink to={`/Home/${id}`} className="nav-link">Home</NavLink>
            <NavLink to={'/Friends'} className="nav-link">Friends</NavLink>
            {/* <NavLink to={'/Profile'} className="nav-link">Profile</NavLink> */}
            <NavLink to={'/UserProfile'} className="nav-link">Your Profile</NavLink>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Login  setId={setId}/>} />
        <Route path='/Home/:id' element={<Home />} />
        <Route path='/Friends' element={<Friends data={friends}/>}/>
        {/* <Route path='/Profile' element={<Profile />} /> */}
        <Route path='/Posts' element={<Posts />} />
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/UserProfile' element={<UserProfile userInfo={userData}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

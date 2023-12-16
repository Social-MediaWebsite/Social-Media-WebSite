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

function App() {
  // const [data,setData]=useState([])
  const [friends,setFriends]=useState([])
  const [userAdd,setUsersAdd]=useState([])
  const [userData, setUserData] = useState(null);
  const [id,setId]=useState(0)
  const [refresh,setRefresh]=useState(false)
  const [dataUsers,setDataUsers]=useState([])
  const [dataFriends,setDataFriends]=useState([])
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

        setUserData(response.data);
        
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserData();
    console.log("user", userData);
    
  }, [id]);  

  // useEffect(()=>{
  //    axios.get('http://localhost:3000/api/socialMedia/users').then((ress)=>{
  //     console.log(ress.data)
  //     setData(ress.data)
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  // },[])
  const handleArray=(friendss)=>{
    const test=friendss.map((ele)=>{return ele.friendsId})
    console.log("id",id)
    console.log("test",test)
    axios.put('http://localhost:3000/api/socialMedia/friend',{friends:[...test,id]}).then((ress)=>{
      console.log(ress.data)
      setUsersAdd(ress.data)
      setDataUsers(ress.data)
    })
  }

  useEffect(()=>{
    axios.get(`http://localhost:3000/api/socialMedia/friends/${id}`).then((ress)=>{
     console.log("friends",ress.data)
     setFriends(ress.data)
     setDataFriends(ress.data)
     ress.data.length?handleArray(ress.data):console.log("no length")
   }).catch((error)=>{
     console.log(error)
   })
 },[id,refresh])
 console.log("hhh",userData)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login  setId={setId}/>} />
        <Route path='/Home/:id' element={<Home  dataUsers={dataUsers} dataFriends={dataFriends}/>} />
        <Route path='/Friends' element={<Friends data={friends} userAdd={userAdd} setRefresh={setRefresh} refresh={refresh} id={id}/>}/>
        <Route path='/Posts' element={<Posts  />} />
        <Route path='/Signup' element={<Signup setId={setId} />}></Route>
        <Route path='/UserProfile' element={<UserProfile userInfo={userData}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

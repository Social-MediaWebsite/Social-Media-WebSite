import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import Posts from './Posts';
import './css/Post.css';
import Navbar from './Navbar'
import Head from './Head';
import UsersFriends from './UsersFriends';

function Home({dataUsers,dataFriends}) {
  


  return (
    <div>
      <Head />
     <div className='home'>
       <Navbar/>
      <Posts />
      <UsersFriends dataUsers={dataUsers} dataFriends={dataFriends}/>
    </div>
    </div>
  );
}

export default Home;

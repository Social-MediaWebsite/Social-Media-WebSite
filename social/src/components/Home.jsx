import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import Posts from './Posts';
import './css/Post.css';
import Head from './Head';
import Pub from './Pub';
import UsersFriends from './UsersFriends';

function Home({userData,dataUsers,dataFriends}) {
  


  return (
    <div>
      <Head userData={userData}/>
     <div className='home'>
      <Pub/>
      <Posts />
      <UsersFriends dataUsers={dataUsers} dataFriends={dataFriends}/>
    </div>
    </div>
  );
}

export default Home;

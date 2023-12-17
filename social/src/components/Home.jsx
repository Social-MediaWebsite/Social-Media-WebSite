import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import Posts from './Posts';
import './css/Post.css';
import Head from './Head';
import UsersFriends from './UsersFriends';
import Pub from './Pub';

function Home({dataUsers,dataFriends}) {
  


  return (
    <div>
      <Head />
     <div className='home'>
      <Pub/>
      <Posts />
      <UsersFriends dataUsers={dataUsers} dataFriends={dataFriends}/>
    </div>
    </div>
  );
}

export default Home;

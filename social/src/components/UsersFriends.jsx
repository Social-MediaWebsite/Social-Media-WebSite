import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Comments from './Comments'
import Likes from './Likes'
import './css/Post.css'
import './css/UsersFriends.css'

function UsersFriends({ dataFriends, dataUsers }) {
  return (
    <div className='fr-side-container'>
      <h3>Friends</h3>
      {dataFriends.map((el, i) => (
        <div key={i} className='ff'>
          <img className='user-image' src={el.userImage} alt='' />
          <div className='user-details'>
            <p>{el.userName}</p>
            <p>{el.userEmail}</p>
          </div>
        </div>
      ))}
      <h3>Other Users</h3>
      {dataUsers.map((el, i) => (
        <div key={i} className='ff'>
          <img className='user-image' src={el.userImage} alt='' />
          <div className='user-details'>
          <p>{el.userName}</p>
            <p>{el.userEmail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersFriends;
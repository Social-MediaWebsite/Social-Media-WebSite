import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Comments from './Comments'
import Likes from './Likes'
import './css/Post.css'
import './css/UsersFriends.css'


function UsersFriends({dataFriends,dataUsers}) {

  console.log("data" ,dataFriends)
 
 return (
  <div className='fr-side-container'>
    <h3>Friends</h3>
    <div>
      {dataFriends.map((el,i)=>(
        <div key={i} className='fr-item' >
          <img src={el.userImage} alt="" />
          <div>
            <div>{el.userName}</div>
            <div>{el.userEmail}</div>
          </div>
        </div>
      ))}
    </div>
     <h3>Other Users</h3>
     <div>
     {dataUsers.map((el,i)=>(
        <div key={i} className='fr-item us-item' >
          <div className=''><img src={el.userImage} alt="" /></div>
          <div>
            <div>{el.userName}</div>
            <div>{el.userEmail}</div>
          </div>
        </div>
      ))}
     </div>
  </div>
 )
}

export default UsersFriends
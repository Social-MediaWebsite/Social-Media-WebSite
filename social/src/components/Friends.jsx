import React, { useCallback } from 'react';
import './css/friends.css';
import axios from 'axios';
import Head from './Head';
import { MdDelete } from "react-icons/md";

function Friends({ data,userAdd, setRefresh, refresh,id,userData}) {
  
  const handleDelete = (obj) => {
    axios.delete(`http://localhost:3000/api/socialMedia/friend/${id}`,{data:obj})
      .then(() => {
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleAdd =(obj)=>{
    axios.post(`http://localhost:3000/api/socialMedia/friend`,obj).then(()=>{
      setRefresh(!refresh)
    })
  }

  return (
    <div className='all-all'>
     <Head userData={userData} id={id}/>
     <div className='bar'></div>
    <div className='all-container'>
      <div className='all-details'>
       <h1>Friends</h1>
      <div className='friends-container'>
       
        {data.map((el, i) => (
          <div key={i} className='friends-item'>
            <img src={el.userImage} alt='' />
            <div className='friends-name'>
            <h3>{el.userName}</h3>
            <MdDelete className='delete-button' onClick={() => {handleDelete({friendsId:el.friendsId}) }}/>
          </div>
          </div>
        ))}
      </div>
      <div className='new-friends-list'>
        {userAdd.map((el, i) => (
          <div key={i} className='friends-item'>
            <img src={el.userImage} alt='' />
            <h3>{el.userName}</h3>
            <button onClick={() => {handleAdd({
              friendsId:el.userId,
              fr_userId:id
            })}}>add friend</button>
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
  )
}

export default Friends;

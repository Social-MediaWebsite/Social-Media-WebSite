// import React from 'react'
// import './css/friends.css'
// import axios from './axios'

// function Friends({data,setRefresh,refresh}) {
// const hundledelete=(id)=>{
//   axios.delete(`http://localhost:3000/api/socialMedia/friend/${id}`).then((ress)=>{
//     setRefresh(!refresh)
//   }).catch(err=>{console.error(err)})
// }
//   return (
//     <div>

    
//     <div className='friends-container'>
//       <h4>Friends</h4>
//       {data.map((el,i)=>(
//         <div key={i} className='friends-item' >
//           <img src={el.userImage} alt="" />
//           <h3>{el.userName}</h3>
//           <button onClick={()=>{hundledelete(el.FriendsId)}}>delete</button>
//         </div>
//       ))}
//     </div>
//     <div>
//      <p>
//       new friends list
//      </p>
//      <h6>friends 1</h6>
//      <h6>friends 2</h6>
//      <h6>friends 3</h6>
//      <h6>friends 4</h6>

//     </div>
//     </div>
// )
// }

// export default Friends
import React, { useCallback } from 'react';
import './css/friends.css';
import axios from 'axios';


function Friends({ data,userAdd, setRefresh, refresh,id}) {

console.log(id)
  const handleDelete = (obj) => {
    console.log("friendId",obj)
    console.log('id',id)
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
    <div>
       <h1>Friends</h1>
      <div className='friends-container'>
       
        {data.map((el, i) => (
          <div key={i} className='friends-item'>
            <img src={el.userImage} alt='' />
            <h3>{el.userName}</h3>
            <button onClick={() => {handleDelete({friendsId:el.friendsId}) }}>Delete</button>
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
  );
}

export default Friends;

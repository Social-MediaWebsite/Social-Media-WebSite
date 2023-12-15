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
import React from 'react';
import './css/friends.css';
import axios from 'axios';

function Friends({ data, setRefresh, refresh }) {
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/socialMedia/friend/${id}`)
      .then((response) => {
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
       <h1>Friends</h1>
      <div className='friends-container'>
       
        {data.map((el, i) => (
          <div key={i} className='friends-item'>
            <img src={el.userImage} alt='' />
            <h3>{el.userName}</h3>
            <button onClick={() => { handleDelete(el.FriendsId) }}>Delete</button>
          </div>
        ))}
      </div>
      <div className='new-friends-list'>
       
        <h4>Friends 1</h4>
        <h4>Friends 2</h4>
        <h4>Friends 3</h4>
        <h4>Friends 4</h4>
        {/* You can add more friend entries here */}
      </div>
    </div>
  );
}

export default Friends;

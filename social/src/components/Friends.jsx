import React from 'react'
import './css/friends.css'

function Friends({data}) {
  return (
    <div className='friends-container'>
      {data.map((el,i)=>(
        <div key={i} className='friends-item' >
          <img src={el.userImage} alt="" />
          <h3>{el.userName}</h3>
        </div>
      ))}
    </div>
  )
}

export default Friends
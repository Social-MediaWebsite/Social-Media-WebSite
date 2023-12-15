import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './css/comment.css'



const  Comments=({commentData})=> {
     
const [addComment,setAddComment]=useState({})


 const newComment=(newObj)=>{
  axios.post('http://localhost:3000/api/socialMedia/comments',newObj).then((ress)=>{
  })
 }
  return (
    <div className="comments-container">
      <div>
        <input type="text" onChange={(e)=>{setAddComment(e.target.value)}}/>
      </div>
        {commentData.map((e,i)=>(
          <div key={i} className='one-comment'>
            <div className='userco-info'>
              <img src={e.userImage} alt="" />
              <h6>{e.userName}</h6>
              <p>{e.co_updatedAt}</p>
            </div>
            <div className='co-info'>
            <p>{e.co_Content}</p>
            <img src={e.co_Image} alt="" />

            </div>
            <div className='del-rep'>
              <h5 >reply</h5> <h5 >delete</h5>
            </div>
          </div>
        ))}
    </div>    
  )
}

export default Comments
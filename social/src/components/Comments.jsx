import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './css/Post.css'
import './css/comment.css'
import Cloudinary from './Cloudinary'
import { useParams } from 'react-router-dom'


const  Comments=({postId,commentData,hundelComment})=> {

  const [img,setImg]=useState("")
  const [comment,setComment]=useState("")
  const {id}=useParams()
console.log(postId)
 const newComment=(newObj)=>{
  axios.post('http://localhost:3000/api/socialMedia/comments',newObj).then((ress)=>{
    hundelComment(postId)
  })
 }

 const deleteComment=(commentId)=>{
  axios.delete(`http://localhost:3000/api/socialMedia/comments/${commentId}`).then((ress)=>{
    hundelComment(postId)
  })
 }
 console.log(commentData)
 console.log("ahhh",id)
  return (
    <div className="comments-container">
      <div className='add-container'>
        <div className='value-container' >
        <input type="text" placeholder='Add a comment !!' onChange={(event)=>{setComment(event.target.value)}}/>
        <Cloudinary setImg={setImg} />
        </div>
        <h4 className='add-button' onClick={()=>{newComment({
          co_Content:comment,
          co_Image:img,
          po_postId:postId,
          co_userId:id
        })}}>Add</h4>
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
             {(e.co_userId==id)&&<h5 onClick={()=>{deleteComment(e.commentId)}} >delete</h5>}
            </div>
          </div>
        ))}
    </div>    
  )
}

export default Comments
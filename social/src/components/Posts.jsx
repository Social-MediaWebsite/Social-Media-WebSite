import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Comments from './Comments'
import Likes from './Likes'
import Cloudinary from './Cloudinary'
import './css/Post.css'
import { FaComments } from "react-icons/fa";

function Posts() {
 const [postData,setPostData]=useState([])
 const [showComment,setShowComment] = useState(false)
  const [idpost,setIdPost] = useState(0)
  const [commentData,setCommentData] = useState([])
  const [idcomment,setIdComment] = useState(0)
const [content,setContent]=useState("")

 useEffect(()=>{
    axios.get("http://localhost:3000/api/socialMedia/postes").then((ress)=>{
      console.log(ress.data)
      setPostData(ress.data)
    })
 },[])

 const hundelComment=(id)=>{ 
  setIdComment(id)
    axios.get(`http://localhost:3000/api/socialMedia/comments/post/${id}`).then((ress)=>{
     console.log(ress.data)
     setCommentData(ress.data)
     
   })
   
 }
 
 return (
    <div className="main-container">
      <div className='add-container'>
        <div className='value-container' >
        <input type="text" placeholder='Add a post !!' onChange={(event)=>{setContent(event.target.value)}}/>
        <Cloudinary/>
        </div>
        <h4 className='add-button' onClick={()=>{console.log("hello")}}>Add</h4>
      </div>
      <div className='postes-container'>
     {postData.map((e,i)=>(
      <div key={i} className="post-container">
        <div className="user-info-container">
          <img className="user-image" src={e.userImage} alt='hi' />
          <h3 onClick={()=>{}}>{e.userName}</h3>
          <div>{e.po_updatedAt}</div>
        </div>
        <div className="post-content-container">
          <div className='poContent'><h3>{e.po_content}</h3></div>
          <div><img src={e.po_image} alt='hello' /></div>
        </div>
        <div className="actions-container">
          <div></div>
          <Likes/> 
          <FaComments  onClick={()=>{
          setShowComment(!showComment);
          hundelComment(e.postId)
          }}/>  
          <div></div>
        </div>

         {(showComment && e.postId===idcomment) && <Comments commentData={commentData}  /> }

      </div>
     ))}
     </div>
    </div>
 )
}

export default Posts
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Comments from './Comments'
import Likes from './Likes'
import './css/Post.css'
import './css/UserProfile.css'
import { FaComments } from "react-icons/fa";
function UserProfile({userInfo}) {
const [oneUser,setOneUser]=useState([])
 const [showComment,setShowComment] = useState(false)
  const [idpost,setIdPost] = useState(0)
  const [commentData,setCommentData] = useState([])
  const [idcomment,setIdComment] = useState(0)


 useEffect(()=>{
    axios.get(`http://localhost:3000/api/socialMedia/postes/user/${userInfo.userId}`).then((ress)=>{
     console.log(ress.data)
     setOneUser(ress.data)
   }).catch((error)=>{
     console.log(error)
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
      <div className='profile'>
        <img className='user-image1' src={userInfo.userImage} alt="" />   
        <h2>{userInfo.userName}</h2>
        <p>{userInfo.userEmail}</p>
      </div>
     {oneUser.map((e,i)=>(
      <div key={i} className="post-container-userP">
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
 )
}

export default UserProfile
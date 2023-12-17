import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Comments from './Comments'
import Likes from './Likes'
import './css/Post.css'
import './css/UserProfile.css'
import { FaComments } from "react-icons/fa";
import Head from './Head'
import Cloudinary from './Cloudinary'

function UserProfile({userInfo}) {
const [oneUser,setOneUser]=useState([])
 const [showComment,setShowComment] = useState(false)
  const [idpost,setIdPost] = useState(0)
  const [commentData,setCommentData] = useState([])
  const [idcomment,setIdComment] = useState(0)
  const [ref,setRef]=useState(false)
 const [img,setImg]=useState("")
 console.log(img)
 useEffect(()=>{
    axios.get(`http://localhost:3000/api/socialMedia/postes/user/${userInfo.userId}`).then((ress)=>{
     console.log(ress.data)
     setOneUser(ress.data)
   }).catch((error)=>{
     console.log(error)
   })
  },[ref])



 const hundelComment=(id)=>{ 
  setIdComment(id)
    axios.get(`http://localhost:3000/api/socialMedia/comments/post/${id}`).then((ress)=>{
     console.log(ress.data)
     setCommentData(ress.data)
     
   })
   
 }
 
 const hundleUpdate=(img)=>{
  axios.put(`http://localhost:3000/api/socialMedia/users/${userInfo.userId}`,{userImage:img}).then(ress=>{
    setRef(!ref)
  }).catch((err)=>{console.error(err)})
 }
 return (
  <div >
     <Head/>
    <div className="main-container-user">
      <div className='test'>
      <div className='profile'>
        <img className='user-image1' src={userInfo.userImage} alt="" />  
        <Cloudinary setImg={setImg}/> 
        <button onClick={()=>{hundleUpdate(img)}}>update image</button>
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
    </div>
    </div>
     )
}

export default UserProfile
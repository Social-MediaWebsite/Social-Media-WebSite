import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Comments from './Comments'
import Likes from './Likes'
import Cloudinary from './Cloudinary'
import './css/Post.css'
import './css/UserProfile.css'
import { FaComments } from "react-icons/fa";
import Head from './Head'
import { useParams } from 'react-router-dom'


function UserProfile({userInfo,refre}) {
  const [oneUser,setOneUser]=useState([])
 const [showComment,setShowComment] = useState(false)
 const [commentData,setCommentData] = useState([])
 const [idcomment,setIdComment] = useState(0)
 const [refrPo,setRefrPo]=useState(false)
 const [img,setImg]=useState("")
 const {id}=useParams()

 useEffect(()=>{
  axios.get(`http://localhost:3000/api/socialMedia/postes/user/${userInfo.userId}`).then((ress)=>{
   console.log(ress.data)
   setOneUser(ress.data)
 }).catch((error)=>{
   console.log(error)
 })
},[])
    
  const hundelComment=(ids)=>{ 
  setIdComment(ids)
    axios.get(`http://localhost:3000/api/socialMedia/comments/post/${ids}`).then((ress)=>{
     console.log(ress.data)
     setCommentData(ress.data)
     
   })  
 }


const handleDelete=(post)=>{
  axios.delete(`http://localhost:3000/api/socialMedia/postes/${post}`).then((ress)=>{
     console.log(ress.data)
     setRefrPo(!refrPo)
   }) 
}
const hundleUpdate=()=>{
  axios.put(`http://localhost:3000/api/socialMedia/users/${userInfo.userId}`,{userImage:img}).then(ress=>{
    refre()
  }).catch((err)=>{console.error(err)})
 }
console.log("ff",img);
 return (
  <div>
    <Head userData={userInfo} id={userInfo.userId}/>
    <div className="main-container-user">
      <div className='test'>
      <div className='profile'>
        <img className='user-image1' src={userInfo.userImage} alt="" />
        <div className='flex'>
        <Cloudinary setImg={setImg}/> 
        <button onClick={()=>{hundleUpdate()}}>Update</button> 
        </div> 
        <h2>{userInfo.userName}</h2>
        <p>{userInfo.userEmail}</p>
      </div>
      </div>
      <div className='postes-container'>
     {oneUser.map((e,i)=>(
      <div key={i} className="post-container">
        <div className="user-info-container">
          <img className="user-image" src={e.userImage} alt='hi' />
          <h3 >{e.userName}</h3>
          <div>{e.po_updatedAt}</div>
          {(e.po_userId==id)&&<button onClick={()=>{handleDelete(e.postId)}}>Delete</button>}
        </div>
        <div className="post-content-container">
          <div className='poContent'><h3>{e.po_content}</h3></div>
          <div><img src={e.po_image} alt='hello' /></div>
        </div>
        <div className="actions-container">
          <div></div>
          <Likes postId={e.postId}/> 
          <FaComments  onClick={()=>{
          setShowComment(!showComment);
          hundelComment(e.postId)
          }}/>  
          <div></div>
        </div>

         {(showComment && e.postId===idcomment) && <Comments commentData={commentData} hundelComment={hundelComment}  /> }

      </div>
     ))}
     </div>
     </div>
    </div>
 )
}

export default UserProfile
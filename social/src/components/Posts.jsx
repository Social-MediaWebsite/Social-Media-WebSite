import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Comments from './Comments'
import Likes from './Likes'
import Cloudinary from './Cloudinary'
import './css/Post.css'
import { FaComments } from "react-icons/fa";
import { useParams } from 'react-router-dom'

function Posts() {
 const [postData,setPostData]=useState([])
 const [showComment,setShowComment] = useState(false)
 const [commentData,setCommentData] = useState([])
 const [idcomment,setIdComment] = useState(0)
 const [img,setImg]=useState('')
 const [content,setContent]=useState("")
 const [refrPo,setRefrPo]=useState(false)
 const {id}=useParams()

 useEffect(()=>{
    axios.get("http://localhost:3000/api/socialMedia/postes").then((ress)=>{
      console.log(ress.data)
      setPostData(ress.data)
    })
 },[refrPo])
 const hundelComment=(ids)=>{ 
  setIdComment(ids)
    axios.get(`http://localhost:3000/api/socialMedia/comments/post/${ids}`).then((ress)=>{
     console.log(ress.data)
     setCommentData(ress.data)
     
   })  
 }
const handleAdd=(obj)=>{
  axios.post(`http://localhost:3000/api/socialMedia/postes`,obj).then((ress)=>{
     console.log(ress.data)
     setRefrPo(!refrPo)
   }) 
}

const handleDelete=(post)=>{
  axios.delete(`http://localhost:3000/api/socialMedia/postes/${post}`).then((ress)=>{
     console.log(ress.data)
     setRefrPo(!refrPo)
   }) 
}

 return (
    <div className="main-container">
      <div className='add-container'>
        <div className='value-container' >
        <input type="text" placeholder='Add a post !!' onChange={(event)=>{setContent(event.target.value)}}/>
        <Cloudinary setImg={setImg}/>
        </div>
        <h4 className='add-button' onClick={()=>{handleAdd({
    po_content:content,
    po_image:img,
    po_userId:id
  })}}>Add</h4>
      </div>
      <div className='postes-container'>
     {postData.map((e,i)=>(
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
          <Likes/> 
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
 )
}

export default Posts
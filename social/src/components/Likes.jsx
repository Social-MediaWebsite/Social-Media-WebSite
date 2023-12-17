import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { useParams } from 'react-router-dom'

function Likes({postId}) {
  const [numLike,setNumLike]=useState(0)
  const [usersLikes,setUsersLikes]=useState([])
  const [refresh,setRefresh]=useState(false)
  const {id}=useParams()
  useEffect(()=>{
    axios.get(`http://localhost:3000/api/socialMedia/likes/post/${postId}`).then((res)=>{
      setUsersLikes(res.data.map((e)=>{return e.li_userId}))
    })
  },[refresh])
  useEffect(()=>{
    axios.get(`http://localhost:3000/api/socialMedia/likes/count/${postId}`).then((res)=>{
      setNumLike(res.data[0].count)
    })
  },[refresh])

  const handleAdd=(ps)=>{
    axios.post(`http://localhost:3000/api/socialMedia/like`,ps).then((res)=>{
      setRefresh(!refresh)
    })
  }

  console.log("hhh",usersLikes)
  return (
    <div>
      {(usersLikes.includes(parseInt(id)))?
      <FcLike onClick={()=>{console.log(usersLikes)}} />:
      <FcLikePlaceholder onClick={()=>{handleAdd({
        po_postId:postId,
        li_userId:id
      })}} />}
      <div>{numLike}</div>
    </div>
  )
}

export default Likes
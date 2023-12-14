
import React ,{useParams}from 'react'
import Posts from './Posts'
import './css/Post.css'
import Navbar from './Navbar'

function Home() {
  // const {id}=useParams()
  // console.log(id);
  return (
    <div className='home'>
      
      <Navbar/>
      <Posts/>
      
    </div>
  )
}

export default Home
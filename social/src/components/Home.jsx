import React from 'react'
import Posts from './Posts'
import './css/Post.css'
import Navbar from './Navbar'
function Home() {

  return (
    <div className='home'>
      
      <Navbar/>
      <Posts/>
      
    </div>
  )
}

export default Home
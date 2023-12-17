import React from 'react'
import './css/Pub.css'
import vidio from '../assets/pub.mp4'
function Pub() {
  return (
    <div class="video-container">
    <video controls loop>
      <source src={vidio} type="video/mp4"/>
      <p>Get 30% off on all items. Limited time offer!</p>
    </video>
  </div>
  )
}

export default Pub
import React from 'react'
import banner from '../assets/banner.jpg'

export default function Banner() {
  return (
    <div className="BanContainer"> 
        <img src={banner} alt="banner" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
    </div>
  )
}
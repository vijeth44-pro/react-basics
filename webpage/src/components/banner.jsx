import React from 'react'
import banner from '../assets/banner.jpg'
import './banner.css'

export default function Banner() {
  return (
    <div className="BanContainer"> 
        <img src={banner} alt="banner" style={{ width: '100%', display: 'flex' }} />
    </div>
  )
}
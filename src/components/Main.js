import React from 'react'
import logo from '../assets/logo.png'
import lock from '../assets/lock.png'
export default function Main() {
  return (
    <div className='main-page'>
        <div className='main-page-wrapper'>
            <div className='image-div'><img src={logo} alt='logo'></img></div>
            <div className='title'><h1>Pocket Notes</h1></div>
            <div className='about'>
            <p>Send and receive messages without keeping your phone online.</p>
            <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p> 
            </div>
        </div>
        <div className='footer'>
          <img src={lock} alt="Lock Icon" />
          <p>end-to-end encrypted</p>
        </div>
    </div>
  )
}


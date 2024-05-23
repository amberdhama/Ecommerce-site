import React from 'react'
import './Blheader.css'
import Logo from '../../images2/logo.png'
function Blheader() {
  return (
    <div className='blheader'>
      <img src={Logo} alt="" className='logo'/>
      <ul className='header-menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  )
}

export default Blheader

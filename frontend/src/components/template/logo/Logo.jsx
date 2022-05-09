import React from 'react'
import './Logo.css'
import logo from '../../../assets/imgs/banner.png'


export const Logo = () => {
  return (
    <aside className='logo'>
      <a href="/" className="logo">
        <img src={logo} alt='d3'></img>
      </a>
    </aside>
  )
}
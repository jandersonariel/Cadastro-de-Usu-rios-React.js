import React from 'react'
import './Nav.css'

export const Nav = () => {
  return (
    <aside className='menu-area'>
      <nav className="menu">
        <a href="/home">
          <i className="fa fa-home"></i> Início
        </a>
        <a href="/users">
          <i className="fa fa-users"></i> Usuários
        </a>
      </nav>
    </aside>
  )
}
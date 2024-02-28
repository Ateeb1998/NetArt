import React from 'react'
import './Logo.css'
import logo from '../assets/logo.png'

export const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  )
}

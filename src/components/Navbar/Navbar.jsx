import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpeg'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} className='logo'/>
      <ul>
        <a href=""><li>Home</li></a>
        <a href=""><li>Rooms</li></a>
        <a href=""><li>Services</li></a>
        <a href=""><li>Facilties</li></a>
        <a href=""><li>Contact</li></a>
        <button className='btn'>Book Now</button>
      </ul>
    </nav>
  )
}

export default Navbar


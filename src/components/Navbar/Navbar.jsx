import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (<>
   <img className='nav-logo' src={logo} alt="" />
    <div className='Navbar'>
      <ul className='nav-list'>
        <li>Home</li>
        <li>About Me</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact Me</li>
      </ul>
     
    </div>
  
  </>
   
  )
}

export default Navbar

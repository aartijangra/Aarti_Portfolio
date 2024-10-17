import React, {useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {

  const [menu,setMenu] = useState("home");

  return (<>
   <img className='nav-logo' src={logo} alt="" />
    <div className='Navbar'>
      <ul className='nav-list'>
        <li> <AnchorLink className='anchor-link' offset={50} href='#home'> <p onClick={()=>setMenu("home")} className={menu==="home" ? "hoverable" : ""}>Home</p> </AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")} className={menu==="about" ? "hoverable" : ""}>About me</p> </AnchorLink> </li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")} className={menu==="projects" ? "hoverable" : ""}>Projects</p> </AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")} className={menu==="contact" ? "hoverable" : ""}>Contact Me</p> </AnchorLink></li>
      </ul>
     
    </div>
   
  </>
   
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../logo-szepmu-eng.svg'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li> <img src={Logo} alt="" className='logo'/></li>
            <li> <Link to="/collections">  Collections</Link></li>
            <li> <Link to="/visit">  Visit</Link></li>
            <li> <Link to="/exhibitions">  Exhibitions</Link></li>
            <li> <Link to="/artworks">  Artworks</Link></li>
            <li> <Link to="/mud">  Collections</Link></li>
            
        </ul>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../logo-szepmu-eng1.svg'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <ul className='navbarlist'>
            <li> <img src={Logo} alt="" className='logo'/></li>
            <li> <Link to="/collections">  Collections</Link></li>
            <li> <Link to="/visit">  Visit</Link></li>
            <li> <Link to="/exhibitions">  Exhibitions</Link></li>
            <li> <Link to="/artworks">  Artworks</Link></li>
            <li> <Link to="/museumshop">  Museum shop </Link></li>
            <li> Search </li>
            
        </ul>
    </div>
  )
}

export default Navbar
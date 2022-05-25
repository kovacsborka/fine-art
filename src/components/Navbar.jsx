import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul>
            <li> <Link to="/collections">  Collections</Link></li>
            
        </ul>
    </div>
  )
}

export default Navbar
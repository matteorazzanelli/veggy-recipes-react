import React, { useState } from 'react'

import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { FaAlignRight } from "react-icons/fa";

import './Navbar.css'

export default function Navbar() {

  const [showNav, setShowNav] = useState(false);
  const handleClick = ()=>{
    setShowNav(!showNav)
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <GiKnifeFork className='logo-link'/>
          </Link>
          <FaAlignRight className="nav-btn" onClick={handleClick}/>
        </div>
        <ul className={showNav ? "nav-links show-nav" : "nav-links"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
        </ul>
      </div>
    </nav>
  )
}

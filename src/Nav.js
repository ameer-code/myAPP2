import React from 'react'
import { Link } from 'react-router-dom'

export function Nav() {

const navStyle = {
    color:'white',
    textDecoration:'none'
    
}
    return (
        <nav id="nav">
            <h3 id="logo2">NETFLIX</h3>

            <ul className="nav-links">
                <Link style={navStyle} to='/movieList'>
                <li>MoviesList</li>
                </Link>
                <Link style={navStyle} to='/about'>
                <li>about</li>
                </Link>
                <Link style={navStyle} to='/email'>
                <li>Contact Us</li>
                </Link>

                <Link style={navStyle} to="/shop">
                <li>Shop</li>
               </Link>

          </ul>
      </nav >
    )
}

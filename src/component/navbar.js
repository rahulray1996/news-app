import React from 'react'
import './navbar.css'

function NavBar() {
    return (
        <div className='navbar'>
            <h1>News App</h1>
            <nav>
              <ul>
               <li><a href='#'>Home</a></li>
               <li><a href='#'>About</a></li>
               <li><a href='#'>Log In</a></li>
               <li><a href='#'>Sign Up</a></li>   
               <li><a href='#'>Contact Us</a></li>
              </ul>  
            </nav>
        </div>
    )
}

export default NavBar

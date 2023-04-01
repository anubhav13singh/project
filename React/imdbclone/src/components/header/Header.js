import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    
   <div className='top'>
     <div className='header'>
            <NavLink to ='/'> Home </NavLink>
            <NavLink to ='/movies/popular'> Popular  </NavLink>
            <NavLink to ='/movies/top_rated'>Top Rated </NavLink>
            <NavLink to ='/movies/upcoming'> Upcoming </NavLink>
    </div>
   </div>

  )
}

export default Header
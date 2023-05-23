import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>

        <NavLink to = '/' >Trending</NavLink>
        <NavLink to = '/Movies' >Movies</NavLink>
        <NavLink to = '/Tv Series' >Tv Series</NavLink>
        <NavLink to = '/Search' >Search</NavLink>

        
    </div>
  )
}

export default Footer
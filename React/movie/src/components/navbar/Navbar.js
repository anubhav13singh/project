import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-heading'>
            <h1>Movie <span>App</span></h1>
        </div>
        <div className='navbar-link'>
            <ul>
               <NavLink to ='/'> <li>Trending</li> </NavLink>
               <NavLink to = '/Movies'> <li>Movies</li></NavLink>
               <NavLink to = "/TvSeries"> <li> Tv Series</li></NavLink>
               <NavLink to = "/Search"> <li>Search</li></NavLink>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar



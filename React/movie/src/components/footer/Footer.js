import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.css'
import {HiFire} from 'react-icons/hi'
import {BiMovie,BiRadio} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer'>

        <NavLink to = '/' > <div className='icons'>
          <div className='icon-size'><HiFire/></div>
            Trending 
          </div></NavLink>

        <NavLink to = '/Movies' > <div className='icons'>
          <div className='icon-size'><BiMovie/></div>
           Movies
           </div></NavLink>

        <NavLink to = '/Tv Series' ><div className='icons'>
          <div className='icon-size'><BiRadio/></div>
          Tv Series 
          </div></NavLink>

        <NavLink to = '/Search' ><div className='icons' >
          <div className='icon-size'><AiOutlineSearch/></div>
          Search 
          </div></NavLink>

        
    </div>
  )
}

export default Footer
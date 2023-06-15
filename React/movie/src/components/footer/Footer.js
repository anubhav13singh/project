import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.css'
import {HiFire} from 'react-icons/hi'
import {BiMovie,BiRadio} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import { Box } from '@mui/material'


function Footer() {
  return (
    < Box width='100%' height={{xs: '7vh', md: '8vh' }} 
    backgroundColor= 'black' 
    display='flex' 
    justifyContent='space-around'
   alignItems='center' 
   position='sticky' bottom='0' left='0' 
   zIndex='100'
   padding='7px 0px'
    >

        <NavLink to = '/' > <div className='icons'>
          <span className='icon-size'><HiFire/></span>
            <span>Trending</span>
          </div>
          </NavLink>

        <NavLink to = '/Movies' > <div className='icons'>
          <span className='icon-size'><BiMovie/></span>
          <span>Movies</span>
           </div></NavLink>

        <NavLink to = '/Tv Series' ><div className='icons'>
          <span className='icon-size'><BiRadio/></span>
          <span>Tv Series</span>
          </div></NavLink>

        <NavLink to = '/Search' ><div className='icons' >
          <span className='icon-size'><AiOutlineSearch/></span>
          <span>Search</span>
          </div></NavLink>

        
    </Box>
  )
}

export default Footer
import React, { useEffect, useState } from 'react'
import "./singleContent.css"
import { Badge } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import { SkeletonTheme } from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

const SingleContent =({poster,id,title,date,media_type,vote}) => {

  const[isloading, setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  })

  return (
<>
    {
      isloading ?
      <div className='media'>
          <SkeletonTheme baseColor = '#202020' highlightColor="#444">
              <Skeleton height ={250} duration= {2} />
          </SkeletonTheme>
      </div>
      :
      
      <NavLink to= {`/${media_type}/${id}`}>

      <div className='media' key={id}>
      <Badge  badgeContent={vote} color={vote>6?"primary" : "secondary"}
      // anchorOrigin={}
       
      />
      
      <img className='poster' src={poster ? `https://image.tmdb.org/t/p/w300/${poster}`:
      "unavailable" }/>
      <b className='title'>{title} </b>
      <span className='subtitle'>
      {media_type=== "tv" ? "Tv Series" : 'Movie'}
      <span className='subtitle'>{date}</span>
      </span>
      </div>

      </NavLink>

    }
    </>
    )
  }
  
  
  export default SingleContent;
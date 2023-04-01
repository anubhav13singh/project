import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './card.css'
import { NavLink } from 'react-router-dom'


function Card({movie}) {

    const [isLoading, setIsloading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setIsloading(false)
        },2000)
    },[])
  return (
    <>
    { isLoading ?
        <div className='card'>
            <SkeletonTheme baseColor = '#202020' highlightColor="#444">
                <Skeleton height ={300} duration= {2} />
            </SkeletonTheme>
        </div>
        :
        <NavLink to ={`movie/${movie.id}`} style={{textDecoration: "none",color: "blue"}}>
            <div className='card'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie ? movie.poster_path : ""}`}/>
                  </div>
                  
                  <div className='card-details'>
                     <div className='card-title'>{movie ? movie.original_title : "" }</div>

                     <div className='card-date'>{movie ? movie.release_date : "" }
                     <span className='card-rating'>{movie ? movie.vote_average : "" }
                     <i className='fas-fa-star'/>
                     </span>
                     </div>

                   <div className='card-desc'>{movie? movie.overview.slice(0.120)+ "..." : ""}</div>

                  </div>
           
        </NavLink>
    }

    </>
  )
}

export default Card
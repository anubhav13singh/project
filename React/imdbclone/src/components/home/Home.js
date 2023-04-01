import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom'
import MovieList from '../movielist/MovieList';


function Home() {

  const [ popularmovies, setPopularmovies] = useState([])
     
    const fetchpopular =() =>{
        axios.get(`
        https://api.themoviedb.org/3/movie/popular?api_key=ae98b4f1a1445b734eaa4779c4fc1724`)
        .then((res)=> setPopularmovies(res.data.results))
    }

    useEffect(()=>{
        fetchpopular()
    },[])
  return (
    <>
        <div className='poster'>
          <Carousel
           showThumbs={false}
           autoPlay={true}
           transitionTime={3}
           infiniteLoop={true}
           showStatus = {false}
           >

            {
              popularmovies.map(movie =>(
                <NavLink to = {`/movie/${movie.id}`}>
                  <div className='poster-img'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie ? movie.backdrop_path : ""}`}/>
                  </div>

                  <div className='details'>
                     <div className='title'>{movie ? movie.original_title : "" }</div>

                     <div className='date'>{movie ? movie.release_date : "" }
                     <span className='rating'>{movie ? movie.vote_average : "" }
                     <i className='fas-fa-star'/>
                     </span>
                     </div>

                   <div className='desc'>{movie? movie.overview : ""}</div>

                  </div>
                </NavLink>
             
              ))
            }
           </Carousel>
           <MovieList/>
        </div>
    </>
  )
}

export default Home
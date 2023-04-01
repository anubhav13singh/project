import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
// import './details.css'
import axios from 'axios'

function Detail() {
    const {id} = useParams()
    const [details, setDetails] = useState()

    const fetchDetail = () =>{
        axios.get(`
        https://api.themoviedb.org/3/movie/${id}?api_key=ae98b4f1a1445b734eaa4779c4fc1724`)
        .then((res)=> setDetails(res.data))
    }

    useEffect(()=>{
        fetchDetail()
    },[])
  return (
    <div className='details'>
        <div className='poster-img'>
                    <img src={`https://image.tmdb.org/t/p/w500/${details ? details.backdrop_path : ""}`}/>
                  </div>

                  <div className='details'>
                      <div className='title'>{details ? details.original_title : "" }</div>

                 <div className='date'>{details ? details.release_date : "" }
                     <span className='rating'>{details ? details.vote_average : "" }
                     <i className='fas-fa-star'/>
                     </span>
                     </div>

                   <div className='desc'>{details? details.overview : ""}</div>

                   </div>
                
    </div>
  )
}

export default Detail
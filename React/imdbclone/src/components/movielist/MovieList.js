import React, {useEffect, useState} from 'react'
import Card from '../cards/card'
import "./movieList.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'


function MovieList() {
    const [movieList, setMovieList] = useState([])
    const {type} = useParams() 

    const getData = () =>{
        axios.get(`
        https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=ae98b4f1a1445b734eaa4779c4fc1724`)
        .then((res)=> setMovieList(res.data.results))
    }

    useEffect(()=>{
        getData() 
    },[])

    useEffect(()=>{
        getData() 
    },[type])



  return (
    <div className='MovieList'>
        <h2 className='list-title'>{(type ? type : "POPULAR").toUpperCase()} </h2>
        <div className='list_cards'>
            {
                movieList.map(movie=>(


                    <Card movie={movie} />


                ))
            }
        </div>
    </div>
  )
}

export default MovieList
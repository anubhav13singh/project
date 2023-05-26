import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
// import './details.css'
import axios from 'axios'
import { Button } from '@mui/material'

function MovieDetails() {
    const {id} = useParams()
    const [details, setDetails] = useState()
    const [video, setVideo] = useState()

    const fetchDetail = async() =>{
        const {data} = await axios.get(`
        https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
         setDetails(data)
        //  console.log(data);
    }

    const fetchVideo = async() =>{
        const {data} = await axios.get(`
        https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
        console.log(data);
        setVideo(data.results[0]?.key)
    }

    useEffect(()=>{
        fetchDetail()
        fetchVideo()
    },[])
  return (
    <>
    <div className='content'>
        <img src={`https://image.tmdb.org/t/p/w500/${details ? details.poster_path : ""}`}/>
    
   <a href={`https://www.youtube.com/watch?v${video}`}>
        click to watch trailor</a>
   
     

    </div>
    </>
  )
}

export default MovieDetails
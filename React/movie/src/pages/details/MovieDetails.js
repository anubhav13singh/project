import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {Carousel} from 'react-responsive-carousel'
import axios from 'axios'
import {AiFillYoutube} from 'react-icons/ai'


function MovieDetails() {
    const {id} = useParams()
    const [details, setDetails] = useState()
    const [video, setVideo] = useState()
    const [credit, setCredit] = useState()

    const fetchDetail = async() =>{
        const {data} = await axios.get(`
        https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
         setDetails(data)
         console.log(data);
    }

    const fetchVideo = async() =>{
        const {data} = await axios.get(`
        https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
        // console.log(data);
        setVideo(data.results[0]?.key)
    }

    const fetchcredits = async(id) =>{
        const {data} = await axios.get(`
         https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
        // console.log(data);
        // setCredit(data.results[0]?.key)
    }

    useEffect(()=>{
        fetchDetail()
        fetchVideo()
        fetchcredits()
    },[])
  return (
    <>
    <div className='content'>
        <img src={`https://image.tmdb.org/t/p/w500/${details ? details.poster_path : ""}`}/>
   
        <div>
            {details? details.original_title : ""}
            {details? details.release_date: ""}
        </div>

       <a href={`https://www.youtube.com/watch?v${video}`}>
        <AiFillYoutube/>
        click to watch trailor</a>

        <Carousel 
           showStatus = {false}
           autoPlay = {true}
           infiniteLoop = {true}
           transitionTime={3}
        >

        </Carousel>

        <div>{details?details.overview: ""} </div>


     

    </div>
    </>
  )
}

export default MovieDetails
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
// import {Carousel} from 'react-responsive-carousel'
import axios from 'axios'
import {AiFillYoutube} from 'react-icons/ai'
import './detail.css'


function SeriesDetails() {
    const {id} = useParams()
    const [details, setDetails] = useState()
    const [video, setVideo] = useState()
    // const [credit, setCredit] = useState()

    const fetchDetail = async() =>{
        const {data} = await axios.get(`
        https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
         setDetails(data)
         console.log(data);
    }

    const fetchVideo = async() =>{
        const {data} = await axios.get(`
        https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
        // console.log(data);
        setVideo(data.results[0]?.key)
    }

    // const fetchcredits = async(id) =>{
    //     const {data} = await axios.get(`
    //      https://api.themoviedb.org/3/movie/${id}/credit?api_key=${process.env.REACT_APP_API_KEY}`)
    //     console.log(data);
    // }

    useEffect(()=>{
        fetchDetail()
        fetchVideo()
        // fetchcredits()
},[])
  return (
    <>

       <div className='content'>


       <div className='backdrop'>
        <img  src={`https://image.tmdb.org/t/p/w500/${details ? details.backdrop_path : ""}`}/>
        </div>

        <div>
            
          <div className='original_title'>
            {details? details.original_name : ""}
           </div>
               
           <h4>Release_Date: {details? details.first_air_date: ""} </h4>

           <h5>Number_of_Season: {details?details.number_of_seasons
               :""}</h5>  
           <h5>Episode: {details?details.number_of_episodes
               :""}</h5>
          
          
            <div className='genre-box'>
          {details? details.genres.map((g) => <div className='genre' key={g.id}>{g.name} </div>): ""}
          </div>
        
           
            <div className='overview'>
            {details?details.overview: ""}
            </div>  
       
        </div>
        
     </div>
        

       <div className='link'>
       <div className='youtube'><AiFillYoutube/></div>
       <a href={`https://www.youtube.com/watch?v${video}`}> 
       click to watch trailor</a>
       </div>
       

      

       

    </>
  )
}

export default SeriesDetails
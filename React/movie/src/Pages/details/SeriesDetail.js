import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
// import {Carousel} from 'react-responsive-carousel'
import axios from 'axios'
import {AiFillYoutube} from 'react-icons/ai'
import './detail.css'
import { Box,Typography } from '@mui/material'


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
 <Box width='100%' color='black' minHeight='75vh'>

<Box display='flex' flexDirection={{xs:'column' , md:'row'}} gap='20px'>

<Box width={{xs:'100%', md:'55vw'}}>
<img  src={`https://image.tmdb.org/t/p/w500/${details ? details.backdrop_path : ""}`} />
</Box>

<Box>
    
  <Typography color='whitesmoke' fontSize={{xs:'18px', md:'25px'}} fontWeight='700' >
    {details? details.original_title : ""}
  </Typography>
       
  <Typography  color='whitesmoke' fontSize={{xs:'15px', md:'20px'}} fontWeight='400' fontStyle='oblique'>Release_Date :
       { details? details.release_date: ""}
  </Typography>

  <Typography color='whitesmoke' fontSize={{xs:'15px', md:'20px'}} fontWeight='400' fontStyle='italic' 
  display='flex' flexDirection='row' gap='10px' 
  >
  {details? details.genres.map((g) => 
  <Box key={g.id}  borderRadius='10px' padding='5px 10px' bgcolor=' gray' margin='7px 1px'
  >{g.name} </Box>): ""}

  </Typography>
   
  <Box fontSize={{xm:'12px', md:'18px'}}
    word-spacing= 'normal'
    border= '1px solid grey'
    borderRadius='20px'
    padding= '5px 10px 6px 15px'
    margin={{xs:'30px 0px',md:'10px 0px'}}
    boxShadow='1px 1px 5px grey'>
    {details?details.overview: ""}
   </Box> 
   

</Box>
   
</Box>
    
<Box className='link'>
<Box className='youtube'><AiFillYoutube/></Box>
<a href={`https://www.youtube.com/watch?v${video}`}> 
click to watch trailor</a>
</Box>

</Box>


     

        
               
           <h4>Release_Date: {details? details.first_air_date: ""} </h4>

           <h5>Number_of_Season: {details?details.number_of_seasons
               :""}</h5>  
           <h5>Episode: {details?details.number_of_episodes
               :""}</h5>
          
          
    </>
  )
}

export default SeriesDetails
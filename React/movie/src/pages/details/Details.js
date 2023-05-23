import React from 'react'
 import {useState, useEffect} from 'react'
 import { useParams, } from 'react-router-dom'
import axios from 'axios';


 function Details() {
const {id} = useParams();
const {media_type} = useParams();


const [content,setContent] =useState([]);
const [video, setVideo] = useState()




const fetchData = async() =>{
    const {data} =  await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=all&sort_by=popularity.desc&include_adult=false&include_video=false`)
    console.log(data);
    setContent(data)
}
   
    const fetchVideo = async() =>{
    const {data} =  await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
    console.log(data);
    setVideo(data.results[0])
}

    useEffect(() => {
        fetchData()
      },[]);
        

  return (
    <>
    v
    fbt
    g

    tgg
    tr
    g
    trg
    t
    g
    tg
    tr
    htr
    h
    ywh
    h
    ty
    hty
    h
    tyh
    ty
    h
    ty
    </>
  )
}

export default Details
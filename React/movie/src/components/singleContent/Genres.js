import React, { useEffect } from 'react'
import axios from 'axios'
import { Chip } from '@mui/material'

const Genres = ({selectedGenres,setSelectedGenres,genres,setGenres,setPage,type}) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres.filter((g) =>g.id !== genre.id))
        setPage(1)
    }

    const fetchGenres = async() => {
       const {data} =await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=all`)

        setGenres(data.genres)
        console.log(data);
    }
    useEffect(() => {
        fetchGenres()

        return() => {
            setGenres({});
            // to unmount when movie api get called
        };
    },[])

  return (
    <>
        <div style={{ padding: "10px 0px 25px 0px" }}>
        {
            selectedGenres.map((genre) => (
            <Chip key={genre.id} label={genre.name} color='primary' variant='outlined' size='small' style={{margin:2 }} clickable 
            /> )
            )
        }
         </div>

    <div style={{ padding: "10px 0px 25px 0px" }}>
        {
            genres ? genres.map((genre) => (
            <Chip key={genre.id} label={genre.name} color='secondary' variant='outlined' size='small' style={{margin:2 }} clickable 
            onclick={() => handleAdd(genre)}
            /> )
            )
             : <div>   </div>
        }
    </div>
    
    </>
  )
}


export default Genres
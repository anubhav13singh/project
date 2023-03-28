import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Trending() {
  
  const [content, Setcontent] =useState([])

  const fetchTrending = () => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=ae98b4f1a1445b734eaa4779c4fc1724`).then(res => {
      Setcontent(res.data.results);
      console.log(res.data.results);
    })
  }

  useEffect(() =>{
    fetchTrending()
  }, [])



  return (
    <div className='trending'>
     {
      content ? content.map((m) => 
      <div className='content' key={m.id}>
        <img src= {m.poster_path} alt = '#' /> 
        {m.title}
      <h2>  {m.release_date}</h2>
      <span>{m.media_type=== "tv"? "Tv series" : 'Movie'}</span>
        {m.vote_average}
      </div>
        )
      : <h2>no trending items</h2>
     }

     

    </div>
  )
}

export default Trending
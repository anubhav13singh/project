import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SingleContent from '../../components/singleContent/SingleContent';
import CustomPagination from '../../components/pagination/CustomPagination';


function Series() {
  
  const [content,setContent] =useState([]);
  const [page, setPage] = useState(1);

  const [numofPages, setNumofPages] = useState()
 

  const fetchMovie = async() => {
    const {data} =  await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=all&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
    // console.log(data.results);
    setContent(data.results)
    setNumofPages(data.total_pages)
  }

  useEffect(() => {
    fetchMovie()
  },[page]);

  return (
    <>
        <span className='pageTitle'>TV Series</span>

        <div className='trending'>
          {
            content && content.map((c) => <SingleContent 
            key={c.id}
             id={c.id} 
             poster= {c.poster_path} 
             title ={c.title || c.name}
             date = {c.first_air_date || c.release_date
             }
             media_type="tv"
             vote = {c.vote_average }
              />)
          
          }
        </div>
        {
          numofPages >1 &&(
          <CustomPagination setPage={setPage} 
          numofPages={numofPages}/>
          )}
    </>
  )
}

export default Series
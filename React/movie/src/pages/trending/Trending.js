import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleContent from '../../components/singleContent/SingleContent';
import './trending.css'
import CustomPagination from '../../components/pagination/CustomPagination';

function Trending() {

  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);


    const fetchTrending = async() => {
      const {data} =  await axios.get(`
      https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
      // console.log(data);
      setContent(data.results)
    }

    useEffect(() => {
      fetchTrending()
    },[page])


  return (
    <>
        <span className='pageTitle'> Trending</span>
        <div className='trending'>
          {
            content && content.map((c) => <SingleContent key={c.id}
             id={c.id} 
             poster= {c.poster_path} 
             title ={c.title || c.name}
             date = {c.release_date }
             media_type={c.media_type}
             vote = {c.vote_average }
              />)
          
          }
        </div>
        <CustomPagination setPage={setPage}/>
    </>
  )
}

export default Trending
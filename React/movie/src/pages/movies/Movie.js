import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SingleContent from '../../components/singleContent/SingleContent';
import CustomPagination from '../../components/pagination/CustomPagination';
// import Genres from '../../components/genres/Genres'
// import useGenre from '../../hooks/useGenre';

function Movie() {

  const [content,setContent] =useState([]);
  const [page, setPage] = useState(1);

  const [numofPages, setNumofPages] = useState()
  // const [selectedGenres, setSelectedGenres] = useState([]);
  // const [genres, setGenres] = useState([])
  // const genreforURL = useGenre(selectedGenres)


  const fetchMovie = async() => {
    const {data} =  await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=all&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
    // console.log(data);
    setContent(data.results)
    setNumofPages(data.total_pages)
  }

  useEffect(() => {
    fetchMovie()
  },[page
    // genreforURL
  ]);
    

  return (
    <>
        <span className='pageTitle'>Discover Movies</span>


            {/* <Genres 
            selectedGenres={selectedGenres} 
            setSelectedGenres={setSelectedGenres} 
            genres={genres} 
            setGenres={setGenres}
            setPage={setPage}
          /> */}

      

        <div className='trending'>
          {
            content && content.map((c) => <SingleContent key={c.id}
             id={c.id} 
             poster= {c.poster_path} 
             title ={c.title || c.name}
             date = {c.release_date || c.first_air_date}
             media_type='movie'
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

export default Movie

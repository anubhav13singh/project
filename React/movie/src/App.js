import React from 'react'
import Header from './components/Header'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'
import Trending from './Pages/trending/Trending'
import Movie from './Pages/movies/Movie'
import Search from './Pages/search/Search'
import Series from './Pages/series/Series'
import Footer from './components/footer/Footer'
import MovieDetails from './Pages/details/MovieDetails'
import SeriesDetail from './Pages/details/SeriesDetail'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
    <div className='App'>
    

        <Routes>
          <Route  path='/' element={<Trending/>}/>
          <Route  path='/Movies' element={<Movie/>}/>
          <Route  path='/Search' element={<Search/>}/>
          <Route  path='/Tv Series' element={<Series/>}/>
          <Route exact path= '/movie/:id' element={<MovieDetails/>}/>
          <Route  path='/tv/:id' element={<SeriesDetail/>}/>
      
        </Routes>
       



      
    </div>
    <Footer />

    </BrowserRouter>
    </>
  )
}

export default App;
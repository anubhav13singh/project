import React from 'react'
import Header from './components/header/Header'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'
import Trending from './Pages/trending/Trending'
import Movie from './Pages/movies/Movie'
import Search from './Pages/search/Search'
import Series from './Pages/series/Series'
import Footer from './components/footer/Footer'
import Details from './Pages/details/Details'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
    <div className='App'>
      <Container>
        <Routes>
          <Route exact path='/' element={<Trending/>}/>
          <Route exact path='/Movies' element={<Movie/>}/>
          <Route exact path='/Search' element={<Search/>}/>
          <Route exact path='/Tv Series' element={<Series/>}/>
          <Route  path='`/${media_type}/${id}` 'element={<Details/>}/>

        </Routes>

      </Container>
    </div>
    <Footer />

    </BrowserRouter>
    </>
  )
}

export default App;
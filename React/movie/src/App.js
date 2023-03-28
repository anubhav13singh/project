import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Trending from './components/Trending/Trending'
import Movies from './components/Movie/Movies'
import Search from './components/Search/Search'
import TvSeries from './components/TvSeries/TvSeries'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      
      <Routes>

        <Route exact path='/' element={<Trending/>} />
        <Route exact path='/Movies' element={<Movies/>} />
        <Route exact path='/TvSeries' element={<TvSeries/>} />
        <Route exact path ='/Search' element={<Search/>} />

      </Routes>

      </BrowserRouter>
      
  
  
        

    </div>
  )
}


export default App

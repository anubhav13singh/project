import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieList from './components/movielist/MovieList';
import Detail from './components/movieDetail/Detail';

function App() {
  return (
   <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:id' element={<Detail/>}/>
      <Route path='/movies/:type' element={<MovieList/>}/>
      <Route path = '*' element={<h1>error</h1>}/>  
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App;




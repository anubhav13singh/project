import axios from 'axios';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import React,{useEffect} from 'react'
import {fetchDataFromApi} from './utils/api'
import { getApiCongiguration } from './store/homeSlice';
import { useSelector, useDispatch } from 'react-redux'

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Details from "./pages/details/Details"
import Explore from "./pages/explore/Explore"
import Search from "./pages/search/search"
import PageNotFound from "./pages/404/pageNotFound"


function App() {
  
  // const url = useSelector((state) => state.)
  const dispatch = useDispatch();
  const {url} = useSelector((state)=> state.home);
  console.log(url);

function apiTest(){
  fetchDataFromApi('/movie/popular')
  // axios.get(`
  // https://api.themoviedb.org/3/movie/popular?api_key=ae98b4f1a1445b734eaa4779c4fc1724`)
  .then((res)=>{
    console.log(res);
    dispatch(getApiCongiguration(res))
  })

}

useEffect(()=>{
  apiTest()
},[]);

  return (
    <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:mediaType/:id' element={<Details/>}/>
      <Route path='/Search/:query' element={<Search/>}/>
      <Route path='/explore/:MediaType' element={<Explore/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      
    </Routes>
    {/* <Footer/>
     */}
    </BrowserRouter>
  )
}


export default App

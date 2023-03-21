import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './components/Categories/Category'
import RandomMeal from './components/RandomMeal/RandomMeal'
import HomePage from './components/HomePage/HomePage'

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
     <Navbar />

      <Routes>

      <Route exact path='/HomePage' element={<HomePage/>}/>
      <Route exact path='/Category' element={<Category/>}/>
      <Route exact path='/RandomMeal' element={<RandomMeal/>}/>

      
      </Routes>
      
      <Footer />


    </BrowserRouter>
    </div>
  )
}

export default App

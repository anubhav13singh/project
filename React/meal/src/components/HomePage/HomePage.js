import React, { useState, useContext, useCallback, useEffect} from 'react'
import './HomePage.css'
import { mycontext } from '../Context/Context';


function HomePage() {

  const [searchTerm, SetsearchTerm] = useState('');

  const {fetchHomepageMeals,meals} = useContext(mycontext);

  //   const fetchMealsHandler =  useCallback(() =>{
  //   fetchHomepageMeals(searchTerm)
  // },[searchTerm,fetchHomepageMeals])

  const fetchMealsHandler =  useEffect(() =>{
    fetchHomepageMeals(searchTerm)
  },[searchTerm,fetchHomepageMeals])


  // searchTerm coz it ll run rvery time when we type{depedency}
 

  return (
    <div className='home'>

      <div className='home-search'>
        <input type={'text'} placeholder="Type a Meal name...."
         value={searchTerm} 
         onChange={(e) => SetsearchTerm(e.target.value)}  />

        <button onClick={fetchMealsHandler}>Search Meal</button>
      </div>

      <div className='home-meals-grid'>
        {meals ? meals.map((m) =>
          <div className='home-meals'key={m.idMeal}> 
           <img src= {m.strMealThumb} alt='$'/>
           <h4>{m.strMeal}</h4>
           {/* <h4>{m.strYoutube}</h4> */}
           </div>)  : (<h2>No meals found! Try another meal...</h2>)
        }
  
      </div>


    </div>
  )
}

export default HomePage
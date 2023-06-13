import React, { useEffect, useState } from 'react'
import './alpha.css'
import './HomePage.css'
import  axios  from 'axios'
import { useNavigate } from 'react-router-dom'

function AlphaMeal() {  
    const alpha = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    
    let navigate = useNavigate();
    const [list, setList] = useState([])
    const [index, setIndex] = useState('')

    const fetchDataByAlpha = () => {
         axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${index}`).then(res => {
            console.log(res.data.meals);
            setList(res.data.meals)
        })
    }
    useEffect(() => {
        fetchDataByAlpha(alpha)
    })

  return (
    <>
    
      
      
      <div className='home-meals-grid'>
        { list ? list.map((m) =>
         
         <div className='home-meals'key={m.idMeal}> 
           <img className='img' src= {m.strMealThumb} alt='$' />
           <h4>{m.strMeal}</h4>
          
           <button key={m.idMeal} className='home-meals'onClick={() =>{navigate(`/${m.idMeal}`)}}>Ingridients</button>
    
           </div>)
           : ""
          }
           </div>

    <div className='alpha'>
         {
           alpha.map((a) => 
           <button className='alphabet' 
           onClick={() => setIndex(a) } >
            <p>{a}</p>
           </button>  
            )
        }
    </div>

    </>
  )
}

export default AlphaMeal
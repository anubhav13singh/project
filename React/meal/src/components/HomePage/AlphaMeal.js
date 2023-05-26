import React, { useEffect, useState } from 'react'
import './alpha.css'
import  axios  from 'axios'

function AlphaMeal() {  
    const alpha = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let num = 0;
    
    const [list, setList] = useState([])
    const [index, setIndex] = useState('')

    const fetchDataByAlpha = (alpha) => {
         axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`).then(res => {
            console.log(res.data.meals);
            setList(res.meals)
        })
    }
    useEffect(() => {
        fetchDataByAlpha(alpha)
    })

  return (
    <>
        {
            alpha.map((item) =>
            <div className='alphabet' key={num++} onChange={(e) => setIndex(e.target.value)} onClick={fetchDataByAlpha}>
                {item}
                </div>)
        }
    </>
  )
}

export default AlphaMeal
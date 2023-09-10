import React, { useEffect, useState } from 'react';
import './alpha.css';
import './HomePage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AlphaMeal() {
  const alpha = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  const navigate = useNavigate(); // Move useNavigate here

  const [list, setList] = useState([]);
  const [index, setIndex] = useState('A');

  const fetchDataByAlpha = () => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${index}`).then(res => {
      console.log(res.data.meals);
      setList(res.data.meals);
    });
  };

  useEffect(() => {
    fetchDataByAlpha(index);

  }, [index]); // Include 'index' as a dependency to trigger the effect when 'index' changes. ..got it

  const handleOnClick = (a) => {
    setIndex(a);
    navigate('/al'); // Use the navigate function directly here see app.js for changes
  };

  return (
    <>
      <div className='alpha'>
        {alpha.map((a) => (
          <button className='alphabet' onClick={() => handleOnClick(a)} key={a}>
            <p>{a}</p>
          </button>
        ))}
      </div>

      <div className='home-meals-grid'>
        {list
          ? list.map((m) => (
            <div className='home-meals' key={m.idMeal}>
              <img className='img' src={m.strMealThumb} alt='$' />
              <h4>{m.strMeal}</h4>
              <button className='home-meals' onClick={() => { navigate(`/${m.idMeal}`) }}>Ingredients</button>
            </div>
          ))
          : ""
        }
      </div>
    </>
  );
}

export default AlphaMeal;

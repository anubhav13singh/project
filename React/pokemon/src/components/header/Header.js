import React, { useEffect, useState } from 'react'
import './header.css'
import axios from 'axios'


function Header() {
const [input, Setinput] = useState('');
const [ pokemon , Setpokemon] = useState([]);


const fetchdata = useEffect(() => { 
  axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`).then(res =>{
    console.log(res);
  })
})



  return (
    <>
    <div className='header'>
    <h1>Pokemon <span> Api</span> </h1>
    <div>
      <input type={'text'} placeholder='search' value={input}
       onChange={(e) =>{Setinput(e.target.value)}} />
       <button onClick={fetchdata} >Search</button>
    </div>
    </div>

    </>
  )
  }
export default Header
import React, { useState } from 'react'
import './HeroBanner.css'
import { useNavigate } from 'react-router-dom';

function HeroBanner() {
                const [background, setBackground] = useState("");
                const [query, setQuery] = useState("");
                const navigate = useNavigate();

                
                const searchQueryhandler = (event) =>{
                    if(event.key === 'Enter' && query.length > 0){
                        navigate(`/search/${query}`)
                    }
                }


  return (
   <div className='herobanner'>
        <div className='wrapper'>
            <div className='herobannerContent'>
                <span className='title'>Welcome</span>
                <span className='sub-title'>Millions of movies, Tv shows and people to discover.Explore Now</span>
                <div className='searchInput'>
                    <input
                     type={'text'} placeholder="Search for movie ar Tv show...." onKeyUp={searchQueryhandler}
                     onChange={(e) => setQuery(e.target.value)}/>
                     <button>Search</button>
                </div>
            </div>

        </div>
   </div>
  )
}

export default HeroBanner
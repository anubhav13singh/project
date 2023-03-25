import React,{usestate} from 'react'

function Home() {
    const [search, Setsearch] = usestate();



  return (
    <div>
        
        <div className='header'>
          <h1>Movie <span>App</span></h1>
          </div>

       <div className='input-box'>
        <input type={'text'} placeholder={'Enter movie name...'} 
        value={search} 
        onChange={(e) =>Setsearch(e.target.value)}/>
       </div>



    </div>
  )
}

export default Home
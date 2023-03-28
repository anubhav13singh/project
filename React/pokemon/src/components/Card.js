import React from 'react'

function Card(pokemon,loading,infopokemon) {
  console.log(pokemon);

  return (
    <div>
      {
        loading ? <h1>loading...</h1> :pokemon.map((item) =>{
          return(
            <>
            <div className='card'key={item.id} onClick={()=>infopokemon(item)}>
              <h2>{item.id}</h2>
              <img src={item.front_default}/>
              <h2>{item.name}</h2>
            </div>
            </>
          )
        })
      }
    </div>
  )
}

export default Card
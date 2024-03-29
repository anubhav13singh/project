import React from 'react'

function Pokeinfo({data}) {
  console.log(data);
  return (
    <>
    {
      (!data)?"":(
        <>
        <h1>{data.name}</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}/>
        <div className='abilities'>
          {
            data.abilities.map(poke => {
              return(
                <>
                <div className='group'>
                  <h2>{poke.ability.name}</h2>
                </div>
                <div className='base-stat'> 
                {
                  data.stats.map(poke=>{
                    return(
                      <h3>{poke.stat.name}:{poke.base_stat}</h3>
                    )
                  })
                }

                </div>
                </>
              )
            })
          }
        </div>
        </>
      )
    }
      <h1></h1>
    </>
  )
}

export default Pokeinfo;
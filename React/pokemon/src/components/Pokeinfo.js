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
        </>
      )
    }
      <h1></h1>
    </>
  )
}

export default Pokeinfo;
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';
import Pokeinfo from './Pokeinfo';

function Main() {

    const[pokeData, SetpokeData] = useState([]);
    const[loading, Setloading] = useState(true);
    const[url, Seturl] = useState(' https://pokeapi.co/api/v2/pokemon/');
    const[next,Setnext ] = useState();
    const[previous, Setprevious ] = useState();
    const[pokedex,SetpokeDex] = useState();

    const pokeFun =async() =>{
        Setloading(true)
        const res = await axios.get(url)
        console.log(res.data.results);
        Setnext(res.data.next)
        Setprevious(res.data.Setprevious)
        getPokemon(res.data.results)
        Setloading(false)
        console.log(pokeData);
    }

    const getPokemon =async(res) =>{
        res.map(async(item) =>{
            console.log(item);
            const result =await axios.get(item.url);
            console.log(result.data);
            SetpokeData(state =>{
                state=[...state,result.data]
                state.sort((a,b) => a.id>b.id?1 : -1)
                return state;
            })
        })
    }
    

    useEffect(()=>{
        pokeFun();
    },[])
    
    return (

    <>
    <div className='container'>
        <div className='left-container'>
                <Card pokemon={pokeData} loading = {loading}
                 infopokemon={(poke)=>SetpokeDex(poke)}/>

                 <div className='btn'>
                    <button onClick={()=>{
                        Seturl(previous)
                        SetpokeData([])
                    }}>previous</button>

                    <button onClick ={()=>{
                        Seturl(next)
                        SetpokeData([])
                    }}>next</button>
                 </div>
        </div>
        <div className='right-container'>
            <Pokeinfo data={pokedex}/>
        </div>


    </div>
    
    </>
  )
}

export default Main
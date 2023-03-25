import React, {createContext, useState} from 'react'
import App from '../../../meal/src/App';

export const mycontext = createContext();

export const Appcontext = () =>{
    
    const [movie, Setmovie] = useState([]);

    const fetchmovie = useCallback(() => {
        axios.get(`http://www.omdbapi.com/?apikey=e50628ce&S=titanic`).then(res => {
            console.log(res.Search);
            Setmovie(res.data.search)
        })
      },[])
    

return (
    <div> 
        <mycontext.Provider value = {{fetchmovie,movie}}>
            <App/>
        </mycontext.Provider>

    </div>
)


}

import React, {createContext, useState, useCallback, Children} from 'react'
import axios from 'axios';
import App from '../../App';

export const mycontext = createContext();

export const Appcontext = () =>{
    const [meals, Setmeals] = useState([]);
    const [Categories, Setcategories] = useState([]);
    const [randomMeal, SetrandomMeal] = useState([]);


    const fetchHomepageMeals = useCallback((searchTerm) =>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
       .then(res =>{
        console.log(res.data.meals)
        Setmeals(res.data.meals)
       }
        )
    }, [])
    

    return (
   <mycontext.Provider value={{fetchHomepageMeals,meals}}>
        <App/>
    </mycontext.Provider>
    )
 
    
};


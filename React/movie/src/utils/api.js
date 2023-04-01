import axios from 'axios';

const BASE_URL ="https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTk4YjRmMWExNDQ1YjczNGVhYTQ3NzljNGZjMTcyNCIsInN1YiI6IjY0MWQ3MTUzMzQ0YThlMDA5YjBiMTgzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.83ibegDyxm1BBkqbM3wL17XtWDF-Bwz1xYFRtlMQZMk';

const headers ={
    Authorization: "bareer " +
    TMDB_TOKEN,
};

export const fetchDataFromApi =async(url, params) =>{
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data
    }
    catch (err){
        console.log(err);
        return err;
    }
}
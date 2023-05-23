// import { StoreMallDirectory } from '@mui/icons-material';
// import { Chip } from '@mui/material';
// import axios from 'axios'
// import React, { useEffect } from 'react'

// const Genres = ({
//     selectedGenres,
//     setSelectedGenres,
//     genres,
//     setGenres,
//     setPage,
    
// }) => {


//   const handleAdd =(genre) =>{
//     setSelectedGenres([...selectedGenres, genre]);
//     setGenres(genres.filter((g) => g.id!== genre.id));
//     setPage(1)
//   }


//   const handleRemove = (genre) => {
//     setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
//     setGenres([...genres, genre]);
//     setPage(1)
//   }


//     const fetchGenres = async() =>{
//        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

//        setGenres(data.genres);
//        console.log(data);
//     }

//     useEffect(()=>{
//         fetchGenres();
//         return () => {
//             setGenres({})
//             // unmount or cancel api call
//         }
//     },[])
//   return (
//     <div style={{padding:"6px 4px",color:'wheat' }}>
//          {
//        selectedGenres && selectedGenres.map((genre) =>(
//           <Chip label={genre.name} 
//           style={{margin:"2px"}} 
//           size= "small"
//            color='primary' 
//            clickable 
//            onDelete={() => handleRemove(genre)}
//            key={genre.id}
//           />
//         ))
//       }
     
//       {
//        genres && genres.map((genre) =>(
//           <Chip label={genre.name}
//            style={{margin:"2px",color:'wheat'}} 
//           size= "small" 
//            clickable  
//           key={genre.id}
//           onClick = { () => handleAdd(genre)}
//           />
//         ))
//       }
        
//     </div>
//   )
// }

// export default Genres
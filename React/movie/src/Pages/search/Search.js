import { Button, Tab, Tabs, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState, useEffect} from 'react'
import axios from 'axios';
import SingleContent from '../../components/singleContent/SingleContent';
import CustomPagination from '../../components/pagination/CustomPagination';

function Search() {
  const [search, SetSearch] = useState('');
  const [type,setType] = useState(0);
  const [content,setContent] =useState([]);
  const [page, setPage] = useState(1);
  const [numofPages, setNumofPages] = useState()


  const fetchSearch = async() => {
    const {data} =  await axios.get(`https://api.themoviedb.org/3/search/${type? "tv" : 'movie'}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=${page}`)
   
    // console.log(data);
    setContent(data.results)
    setNumofPages(data.total_pages)
    SetSearch('')
  }


  useEffect(() => {
    fetchSearch()
  },[type, page]);

  return (
    <div style={{margin:'20px'}}>
      <div style={{display:"flex"}}>
       <TextField 
       style={{flex: 1}}
       className='SearchBox'
       label= 'search'
       variant='filled'
       onChange={(e) => SetSearch(e.target.value)}
       />
        <Button varient= "contained"
        style={{marginLeft : 10 }}
        onClick={fetchSearch} >
        <SearchIcon />
        </Button>
      </div>


        <Tabs value={type}
         indicatorColor="primary" 
         textColor= "primary"
         onChange={(event, newValue)=>{
          setType(newValue);
          setPage(1)
         }}
         style={{paddingBottom: 25}}
        >

          <Tab style={{width: '40%'}} label="Search Movies"/>
          <Tab style={{width: '40%'}} label="Search Tv Series"/>

        </Tabs>


        <div className='trending'>
          {
            content && content.map((c) => <SingleContent key={c.id}
             id={c.id} 
             poster= {c.poster_path} 
             title ={c.title || c.name}
             date = {c.release_date || c.first_air_date}
             media_type={type ? "tv" : "movie"}
             vote = {c.vote_average }
              />)
            }
            {search && !content ?
             (type ? <h2>No Series Found</h2> : <h2>NO Movies Found</h2>) 
             :<></>
            }
          
        </div>
        {
          numofPages >1 &&(
          <CustomPagination setPage={setPage} 
          numofPages={numofPages}/>
          )}
 

        </div>
  )
}

export default Search
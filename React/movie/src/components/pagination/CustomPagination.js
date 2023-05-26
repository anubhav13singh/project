import { Pagination } from '@mui/material'
import React from 'react'

// create theme in pagination


function CustomPagination({setPage,numofPages}) {
// we can pass numofPages manually for ex numofPages=10,whenever numofPages is passed as props it ll retrive its value or else by default numofPages ll be 10
    const handlePage = (page) =>{
       setPage(page);
       window.scroll(0,0);
    }
  return (
    <>
    <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 15,
    }}>

    <Pagination count= {numofPages} 
    onChange={(e) => handlePage(e.target.textContent)}
    hideNextButton
    hidePrevButton
    color='primary'
    />
    </div>
    </>
  )
}

export default CustomPagination
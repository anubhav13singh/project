import { Pagination } from '@mui/material'
import React from 'react'

// create theme in pagination


function CustomPagination({setPage}) {
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

    <Pagination count= {10} 
    onChange={(e) => handlePage(e.target.textContent)}/>
    </div>
    </>
  )
}

export default CustomPagination
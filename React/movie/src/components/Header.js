import React from 'react'
import {Box, Typography} from '@mui/material'


function Header() {
  return (
   <Box width='100%' height={{xs: '7vh', md: '8vh' }} 
   backgroundColor= 'black' display='flex' justifyContent='center' alignItems='center' position='sticky' top='0' left='0' zIndex='100'>

    <Typography fontSize={{xs:'5vh', md:'6vh'}} fontWeight='700' color='white' textAlign='center'>
      Entertainment Hub
    </Typography>

   </Box>
  )
}

export default Header
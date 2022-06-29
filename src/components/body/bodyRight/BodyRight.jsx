import React from 'react'
import ImageSlider from './imageSlider/ImageSlider'
import './bodyRight.css'
import { Stack } from '@mui/material'
// import axios from 'axios';






const BodyRight = () => {


  return(
    <Stack spacing={2} p={2} sx={{borderRadius:3}}  >
      <ImageSlider/>
    </Stack>
  )
  
}

export default BodyRight
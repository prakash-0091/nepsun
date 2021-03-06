import React from 'react'
import ImageSlider from './imageSlider/ImageSlider'
import './bodyRight.css'
import { Box, Stack } from '@mui/material'
import ItemsSlider from './itemsSlider/ItemsSlider'
import Ad from '../bodyLeft/Ad'
import ReceiveAlerts from './receiveAlerts/ReceiveAlerts'
import FreshAds from './freshAds/FreshAds'
// import axios from 'axios';






const BodyRight = () => {


  return(
    <Stack spacing={2} p={2} sx={{borderRadius:3}}  >
      <ImageSlider />
      <ItemsSlider title={'movies'} />

      <Box>
        <Ad/> 
      </Box>
      <Box>
        <ReceiveAlerts/> 
      </Box>
      <Box>
        <FreshAds/> 
      </Box>

    </Stack>
  )
  
}

export default BodyRight
import { Stack, Typography } from '@mui/material'
import React from 'react'
import MultiActionAreaCard from '../../../common/MultiActionAreaCard/MultiActionAreaCard'
import './itemsSlider.css'


const ItemsSlider = () => {
  return (
    // <div className="items-slider"  >
    <Stack spacing={1} className="items-slider" p={1} >
      <Stack direction='row' justifyContent='space-between' alignItems='center' pl={1} pr={1} >

        <Typography className='heading' variant='h6' sx={{

        }} >
          Services
        </Typography>
        <Typography className='heading' variant='p' sx={{

        }} >
          view more +
        </Typography>
      </Stack>


      <Stack gap={1} className='slider' direction='row' justifyContent='flex-start'  >

        <MultiActionAreaCard />
        <MultiActionAreaCard />
        <MultiActionAreaCard />
        <MultiActionAreaCard />
        <MultiActionAreaCard />

      </Stack>
    </Stack>
  )
}

export default ItemsSlider
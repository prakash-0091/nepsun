import { Stack, Typography } from '@mui/material'
import React from 'react'
import MultiActionAreaCard from '../../../common/MultiActionAreaCard/MultiActionAreaCard'

const FreshAds = () => {
  return (
    <Stack spacing={3} sx={{
      width: '95%',
      margin: 'auto',
      padding: '10px',
      border: '2px solid gray',
      borderRadius: '10px',
    }} >
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='h5' sx={{

          fontWeight: 'bolder'
        }} >
          Fresh Ads
        </Typography>
        <Typography variant='p'  >
          view more +
        </Typography>
      </Stack>
      <Stack direction='row' justifyContent='space-evenly' flexWrap='wrap' >
        <MultiActionAreaCard />
        <MultiActionAreaCard />
        <MultiActionAreaCard />
        <MultiActionAreaCard />
        <MultiActionAreaCard />
        <MultiActionAreaCard />


      </Stack>
    </Stack>
  )
}

export default FreshAds
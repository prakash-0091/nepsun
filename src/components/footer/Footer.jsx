import { Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Stack alignItems='center' spacing={2} justifyContent='center' sx={{
        backgroundColor:'black',
        color:'white',
        padding:'10px 20px'
    }} >
        <Typography variant='p'>
            copyright@2022 | nepsun
        </Typography>
        <Typography variant='p' >
            Front-End Engineer | Prakash Tajpuriya
        </Typography>
    </Stack>

  )
}

export default Footer
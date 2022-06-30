import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ReceiveAlerts = () => {
  return (
    <Stack spacing={2} sx={{
        width:'95%',
        margin:'auto',
        border:'2px solid gray',
        padding:'10px',
        borderRadius:'10px'
    }} >
        <Typography variant='h6' >
            I want to receive alerts
        </Typography>
        <Box>
            <Stack spacing={2}>
                <Stack direction='row' spacing={2}>
                    <h5>categories</h5>
                    <h5>categories</h5>
                    <h5>categories</h5>
                </Stack>
            </Stack>
        </Box>
    </Stack>
  )
}

export default ReceiveAlerts
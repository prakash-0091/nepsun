import { Grid, Stack } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import BodyLeft from './bodyLeft/BodyLeft';
import BodyRight from './bodyRight/BodyRight'


const Body = () => {
    
    const mediumDevice = useMediaQuery('(max-width:1257px)');


  return (
    <Stack direction='row' spacing={1} sx={{
        padding: mediumDevice ? '' : '0 10%'
    }}  >

       <Grid container  >
            <Grid item xs={3} bgcolor='blue' >
                <BodyLeft/>
            </Grid>
            <Grid item xs={9} bgcolor='yellow' >
                <BodyRight/>
            </Grid>

       </Grid>

    </Stack>
  )
}

export default Body
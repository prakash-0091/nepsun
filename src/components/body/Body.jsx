import { Grid, Stack } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import BodyLeft from './bodyLeft/BodyLeft';
import BodyRight from './bodyRight/BodyRight'


const Body = () => {

  const mediumDevice = useMediaQuery('(max-width:1920px)');
  const smallDevice = useMediaQuery('(max-width:1010px)');

  return (
    <Stack direction='row' spacing={1} sx={{
      padding: mediumDevice ? '' : '0 10%'
    }}  >
      <Grid container  >
        {
          smallDevice ? '' :
            <Grid item xs={3} >
              <BodyLeft />
            </Grid>
        }
        {
          smallDevice ?
            <Grid item  xs={12} >
              <BodyRight />
            </Grid> :
            <Grid item  xs={9} >
              <BodyRight />
            </Grid>
        }

      </Grid>

    </Stack>
  )
}

export default Body
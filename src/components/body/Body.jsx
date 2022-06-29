import { Grid, Stack } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import BodyLeft from './bodyLeft/BodyLeft';
import BodyRight from './bodyRight/BodyRight'


const Body = () => {

  const mediumDevice = useMediaQuery('(max-width:1257px)');
  const smallDevice = useMediaQuery('(max-width:1010px)');

  return (
    <Stack direction='row' spacing={1} sx={{
      padding: mediumDevice ? '' : '0 10%'
    }}  >
      make item sliders
      <Grid container  >
        {
          smallDevice ? '' :
            <Grid item xs={3} >
              <BodyLeft />
            </Grid>
        }
        {
          smallDevice ?
            <Grid item bgcolor='yellow' xs={12} >
              <BodyRight />
            </Grid> :
            <Grid item bgcolor='yellow' xs={9} >
              <BodyRight />
            </Grid>
        }

      </Grid>

    </Stack>
  )
}

export default Body
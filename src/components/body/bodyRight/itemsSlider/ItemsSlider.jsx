import { Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import MultiActionAreaCard from '../../../common/MultiActionAreaCard/MultiActionAreaCard'
import './itemsSlider.css'


const ItemsSlider = (props) => {

  const [comingSoonMovies, setComingSoonMovies] = React.useState(null)

  const getComingSoonMovies = async () => {
    const res = await axios.get('https://api.qfxcinemas.com/api/public/NowShowing')

    if (res.status === 200) {
      const movies =  res.data.data
      setComingSoonMovies(movies)
    }
    
  }
  
  useEffect(() => {
    getComingSoonMovies();
  }, [])
  



  return (
    // <div className="items-slider"  >
    <Stack spacing={1} className="items-slider" p={1} >
      <Stack direction='row' justifyContent='space-between' alignItems='center' pl={1} pr={1} >

        <Typography className='heading' variant='h6' sx={{

        }} >
          {props.title}
        </Typography>
        <Typography className='heading' variant='p' sx={{

        }} >
          view more +
        </Typography>
      </Stack>


      <Stack gap={1} className='slider' direction='row' justifyContent='flex-start'  >

        {
          comingSoonMovies!=null && comingSoonMovies.map(movie=>{
            return(
              <MultiActionAreaCard key={movie.name} movie={movie} />

            )
          })
        }


      </Stack>
    </Stack>
  )
}

export default ItemsSlider
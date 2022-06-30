import { Button, InputBase, Stack, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import BasicSelect from '../../../navbar/BasicSelect'


const locations = ['select location', 'ktm', 'lpt', 'pkh', 'brt']
const cities = ['select city *', 'damak', 'bhadrapur', 'kathmandu', 'butwal']
const categories = ['select category *', 'electronics', 'sports', 'automobiles', 'music', 'music', 'music']
const subCategories = ['select sub category *', 'electronics', 'sports', 'automobiles', 'music', 'music', 'music']




const ReceiveAlerts = () => {

    const extraSmallDevice = useMediaQuery('(max-width:571px)');



    return (
        <Stack spacing={2} sx={{
            width: '95%',
            margin: 'auto',
            border: '2px solid gray',
            padding: '10px',
            borderRadius: '10px'
        }} >
            <Typography variant='h6' >
                I want to receive alerts
            </Typography>
            <Box>
                <Stack spacing={4}>
                    <Stack direction='row' spacing={2} justifyContent={extraSmallDevice?'flex-start':'space-evenly'}  flexWrap='wrap'  >
                        <Box>
                            <BasicSelect datas={categories} />
                        </Box>
                        <Box>
                            <BasicSelect datas={subCategories} />
                        </Box>
                        <Box>
                            <BasicSelect datas={cities} />
                        </Box>
                        <Box>
                            <BasicSelect datas={locations} />
                        </Box>

                    </Stack>
                    <Stack direction='row' spacing={2} justifyContent='space-between' flexWrap='wrap'  >
                        <Stack direction='row' spacing={2} flexWrap='wrap' >
                            <Box p={1}>
                                <InputBase required placeholder='phone number' sx={{
                                    borderBottom: '2px solid gray',

                                }} />
                            </Box>
                            <Box p={1} >
                                <InputBase required placeholder='email' sx={{
                                    borderBottom: '2px solid gray',

                                }} />
                            </Box>
                        </Stack>
                        <Stack  p={1}  >
                            <Box  >
                                <Button   variant='contained' color='action' >Create Alert</Button>
                            </Box>
                        </Stack>


                    </Stack>
                </Stack>
            </Box>
        </Stack>
    )
}

export default ReceiveAlerts
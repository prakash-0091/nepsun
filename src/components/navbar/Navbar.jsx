import { Avatar, Badge, Button, Stack, Typography } from '@mui/material'
import MainMenu from './MainMenu'
import React from 'react'
import { Box } from '@mui/system'
import BasicSelect from './BasicSelect'
import useMediaQuery from '@mui/material/useMediaQuery';
import NavSearch from './NavMiddle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';





const languages = ['eng', 'nep']


const Navbar = () => {

    const extraSmallDevice = useMediaQuery('(max-width:571px)');
    const smallDevice = useMediaQuery('(max-width:1010px)');
    const mediumDevice = useMediaQuery('(max-width:1257px)');


    return (
        <  >
            <Stack direction='row' justifyContent='space-between' sx={{
                padding: mediumDevice ? '1%' : '1% 10%'
            }}  >
                <Stack direction='row' alignItems='center' >
                    <Box>
                        <MainMenu />
                    </Box>
                    <Box>
                        Nepsun
                    </Box>
                </Stack>

                {
                    !smallDevice ?
                        <NavSearch /> :
                        extraSmallDevice ? '':
                        <Stack direction='row' alignItems='center' >
                            <SystemUpdateAltIcon />&nbsp;Download The App
                        </Stack> 
                        
                }
                <Stack spacing={1} >
                    <Stack direction='row' alignItems='center' spacing={1}>
                        <Box>
                            <BasicSelect datas={languages} />
                        </Box>
                        <Box pr={2} >
                            <Badge badgeContent={4} color="primary">
                                <NotificationsActiveIcon color="action" />
                            </Badge>
                        </Box>
                    </Stack>
                    {
                        !smallDevice ?
                            <Stack direction='row'>
                                <Button  >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> &nbsp;
                                    <Typography variant='p' sx={{ color: 'black' }} >
                                        login/register
                                    </Typography>
                                </Button>
                                <Button variant='contained' color='warning' >
                                    post free ads
                                </Button>
                            </Stack> : ''
                    }
                </Stack>
            </Stack>
            {
                smallDevice ?
                    <NavSearch /> : ""

            }

        </>
    )
}

export default Navbar
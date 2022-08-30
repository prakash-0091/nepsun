import { Alert, Avatar, Badge, Button, Snackbar, Stack, Typography } from '@mui/material'
// import MainMenu from './MainMenu'
import React from 'react'
import { Box } from '@mui/system'
import BasicSelect from './BasicSelect'
import useMediaQuery from '@mui/material/useMediaQuery';
import NavSearch from './NavMiddle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

import { useDispatch, useSelector } from 'react-redux';
import { userLoggedIn, userLoggedOut, loginFormClosed, loginFormOpened, errorDismissed } from '../main/mainSlice'

import LoginFormModal from './login/LoginFormModal'

import {

    Link
} from 'react-router-dom';


const languages = ['eng', 'nep']


const Navbar = () => {

    const extraSmallDevice = useMediaQuery('(max-width:571px)');
    const smallDevice = useMediaQuery('(max-width:1010px)');
    const mediumDevice = useMediaQuery('(max-width:1257px)');


    const loggedIn = useSelector((state) => state.main.user.loggedIn)
    const errorOpen = useSelector((state) => state.main.loginFormError.open)
    const userName = useSelector((state) => state.main.user.name)
    const errorMessage = useSelector((state) => state.main.loginFormError.error)
    const dispatch = useDispatch()








    const handleLrBtn = () => {
        dispatch(loginFormOpened())
    }


    const handleErrorClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(errorDismissed())
    };



    const handleLogout = () => {
        dispatch(userLoggedOut())
    }


    return (
        <>

            <Stack direction='row' justifyContent='space-between' sx={{
                padding: mediumDevice ? '1%' : '1% 10%'
            }}  >
                <Stack direction='row' alignItems='center' >
                    <Box>
                        {/* <MainMenu /> */}
                    </Box>
                    <Box>
                        Nepsun
                    </Box>
                </Stack>

                {
                    !smallDevice ?
                        <NavSearch /> :
                        extraSmallDevice ? '' :
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
                        <Box>
                            {/* <ModeBtn/> */}
                        </Box>
                    </Stack>
                    {
                        !smallDevice ?
                            <Stack direction='row'>

                                <Link to="/profile">
                                    <Avatar alt={loggedIn ? userName : ''} src="/static/images/avatar/1.jpg" /> &nbsp;

                                </Link>

                                {
                                    loggedIn ?
                                        <Typography variant='p' sx={{ color: 'black', display: 'flex', alignItems: 'center', cursor: 'pointer' }} p={1} onClick={handleLogout}  >
                                            Logout
                                        </Typography> :
                                        <Typography variant='p' sx={{ color: 'black', display: 'flex', alignItems: 'center', cursor: 'pointer' }} p={1} onClick={handleLrBtn}  >
                                            login/register
                                        </Typography>
                                }



                                <LoginFormModal />



                                <Snackbar open={errorOpen} autoHideDuration={6000} onClose={handleErrorClose}>
                                    <Alert onClose={handleErrorClose} severity="error" sx={{ width: '100%' }}>
                                        {errorMessage}
                                    </Alert>
                                </Snackbar>
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
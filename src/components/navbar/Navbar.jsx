import { Alert, Avatar, Badge, Button, InputBase, Modal, Snackbar, Stack, Typography } from '@mui/material'
import MainMenu from './MainMenu'
import React, { useRef } from 'react'
import { Box } from '@mui/system'
import BasicSelect from './BasicSelect'
import useMediaQuery from '@mui/material/useMediaQuery';
import NavSearch from './NavMiddle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: 'white',
    borderRadius: '5px',
    pt: 2,
    px: 4,
    pb: 3,
    background: 'rgba(32, 32, 32,0.5)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
};

const inputStyle = {
    border: '1px solid white',
    borderRadius: '15px',
    padding: '8px',
    // color:'whitesmoke',
    boxShadow: '0 0 5px 2px black',
    backgroundColor: 'white'
}



const languages = ['eng', 'nep']


const Navbar = () => {

    const extraSmallDevice = useMediaQuery('(max-width:571px)');
    const smallDevice = useMediaQuery('(max-width:1010px)');
    const mediumDevice = useMediaQuery('(max-width:1257px)');


    const [loginFormError, setLoginFormError] = React.useState('')
    const [openLoginForm, setOpenLoginForm] = React.useState(false)
    const [openRegisterForm, setOpenRegisterForm] = React.useState(false)
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loggedIn, setLoggedIn] = React.useState(false)
    const [user, setUser] = React.useState('')

    const [errorOpen, setErrorOpen] = React.useState(false)


    const [passFieldType, setPassFieldType] = React.useState('password')


    const handleLrBtn = () => {
        setOpenLoginForm(true)
    }
    const handleClose = () => {
        setOpenLoginForm(false)
    }

    const handleEyeClick = () => {
        if (passFieldType === 'password') setPassFieldType('text')
        else setPassFieldType('password')
    }


    const handleLogin = () => {

        if (username !== null && password !== null) {

            if (username === 'user' && password === 'user') {
                setLoggedIn(true)
                setUser('Prakash')
                setUsername('')
                setPassword('')
                setOpenLoginForm(false)
            } else {
                setLoginFormError('Username or Password Incorrect')
                setErrorOpen(true)
            }


        }
    }

    const handleErrorClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setErrorOpen(false);
    };



    const handleLogout = () => {
        setLoggedIn(false)
        setUser('')
    }


    return (
        <>

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
                                <Avatar alt={loggedIn ? user : ''} src="/static/images/avatar/1.jpg" /> &nbsp;

                                {
                                    loggedIn ?
                                        <Typography variant='p' sx={{ color: 'black', display: 'flex', alignItems: 'center', cursor: 'pointer' }} p={1} onClick={handleLogout}  >
                                            Logout
                                        </Typography> :
                                        <Typography variant='p' sx={{ color: 'black', display: 'flex', alignItems: 'center', cursor: 'pointer' }} p={1} onClick={handleLrBtn}  >
                                            login/register
                                        </Typography>
                                }
                                <Modal
                                    open={openLoginForm}
                                    onClose={handleClose}
                                    aria-labelledby="parent-modal-title"
                                    aria-describedby="parent-modal-description"
                                >
                                    <Box sx={{ ...style, width: 400 }}>
                                        <Stack direction='row' justifyContent='space-between'>
                                            <h1  >Login</h1>
                                            <Button disableFocusRipple sx={{ color: 'white', padding: 0, margin: 0 }} >
                                                forgot password ?
                                            </Button>
                                        </Stack>
                                        <Stack spacing={2}>
                                            <InputBase required fullWidth placeholder='username' autoFocus sx={{ ...inputStyle }} value={username} onChange={e => setUsername(e.currentTarget.value)} />
                                            <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ ...inputStyle, paddingRight: '15px' }} >
                                                <InputBase required fullWidth placeholder='password' autoComplete='false' type={passFieldType} value={password} onChange={e => setPassword(e.currentTarget.value)} />

                                                {
                                                    passFieldType === 'password' ? <VisibilityIcon color='primary' onClick={handleEyeClick} /> : <VisibilityOffIcon color='primary' onClick={handleEyeClick} />
                                                }
                                            </Stack>
                                            <Button variant='contained' sx={{ borderRadius: '15px', padding: '14px' }} onClick={handleLogin} >
                                                Login
                                            </Button>
                                            <Button variant='contained' color='warning' sx={{ borderRadius: '15px', padding: '14px' }} >
                                                Register
                                            </Button>
                                        </Stack>

                                        {/* <ChildModal /> */}
                                    </Box>
                                </Modal>
                                <Snackbar open={errorOpen} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert onClose={handleErrorClose} severity="error" sx={{ width: '100%' }}>
                                        Username or Password Incorrect!
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
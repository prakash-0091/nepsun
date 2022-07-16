import { Button, InputBase, Modal, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import {useSelector,useDispatch} from 'react-redux'
import {userLoggedIn,userLoggedOut, errorOccured, loginFormClosed} from '../../main/mainSlice'
import { useSelect } from '@mui/base';

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


const LoginFormModal = () => {

    const openLoginForm = useSelector((state)=> state.main.loginForm.open)
    const dispatch = useDispatch()


    const [username, setUsername]= React.useState('')
    const [password, setPassword]= React.useState('')

    const [passFieldType, setPassFieldType] = React.useState('password')



    const handleEyeClick = () => {
        if (passFieldType === 'password') setPassFieldType('text')
        else setPassFieldType('password')
    }


    const handleLogin = () => {

        if (username !== null && password !== null) {

            if (username === 'user' && password === 'user') {
                dispatch(userLoggedIn())
                setUsername('')
                setPassword('')

            } else {
                dispatch(errorOccured())

            }


        }
    }

    const handleClose = () => {
        dispatch(loginFormClosed())
    }










    return (
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
    )
}

export default LoginFormModal
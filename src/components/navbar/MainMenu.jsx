import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from './MenuIcon'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';



const MainMenu = (props) => {





    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };




    return (
        <>
            <Button
                id="main-menu-btn"
                aria-controls={open ? 'main-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleMenuClick}
            >
                <MenuIcon handleMenuClick={handleMenuClick} />
            </Button>
            <Menu
                id="main-menu"
                aria-labelledby="main-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}

            >
                {/* {
                props.menuItems.map(item => {
                    return (
                        <MenuItem onClick={props.handleClose} >{item}</MenuItem>
                        
                        )
                    })
                } */}
                <MenuItem onClick={handleClose} >
                    <ArrowBackIosIcon />Back
                </MenuItem>
                <Link  to='/profile'><MenuItem onClick={handleClose} ><AccountCircleIcon />&nbsp;Profile</MenuItem></Link>
                <Link  to='/chats'><MenuItem onClick={handleClose} ><AccountCircleIcon />&nbsp;Chats</MenuItem></Link>
                <MenuItem onClick={handleClose} ><SystemUpdateAltIcon />&nbsp;Download The App</MenuItem>
                <MenuItem onClick={handleClose} >< SettingsIcon />&nbsp;Settings</MenuItem>

                <Divider />
                <MenuItem onClick={handleClose} ><LogoutIcon />&nbsp;Logout</MenuItem>




            </Menu>
        </>

    )
}

export default MainMenu
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


function getAbsPosition(element) {
    var rect = element.current.getBoundingClientRect();
    // console.log(rect)
    return { left: rect.left, top: rect.top }
}



const MainMenu = (props) => {

    const [top, setTop] = React.useState(0)
    const [left, setLeft] = React.useState(0)

    // const [open, setOpen] = React.useState(false);
    // const anchorRef = React.useRef(null);

    // const handleMenuClick = (menuIcon) => {
    //     const rect = getAbsPosition(menuIcon)
    //     setTop(Math.ceil(rect.top))
    //     setLeft(Math.ceil(rect.left))
    //     setOpen(true)
    // }

    // // const handleToggle = () => {
    // //     setOpen((prevOpen) => !prevOpen);
    // // };

    // const handleClose = (event) => {
    //     if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //         return;
    //     }

    //     setOpen(false);
    // };

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
                <MenuItem onClick={handleClose} ><AccountCircleIcon />&nbsp;Profile</MenuItem>
                <MenuItem onClick={handleClose} ><SystemUpdateAltIcon />&nbsp;Download The App</MenuItem>
                <MenuItem onClick={handleClose} >< SettingsIcon />&nbsp;Settings</MenuItem>

                <Divider />
                <MenuItem onClick={handleClose} ><LogoutIcon />&nbsp;Logout</MenuItem>




            </Menu>
        </>

    )
}

export default MainMenu
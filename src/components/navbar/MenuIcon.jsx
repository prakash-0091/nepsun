import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {useRef } from 'react';



const styles = {
    menuIconBar:{
        backgroundColor: "rgb(85, 85, 85)",
        height: '6px',
        width: '50px',
        borderRadius: 3,
    },
    menuIconBarShort:{
        backgroundColor: "rgb(85, 85, 85)",
        height: '6px',
        width: '48px',
        borderRadius: 3,
    }
}

const MenuIcon = ({handleMenuClick}) => {

    const menuIcon = useRef()


    return (
        <Stack ref={menuIcon} spacing={1} p={1} onClick={()=>handleMenuClick(menuIcon)}  >
   
            <Box sx={styles.menuIconBar } />
            <Box sx={styles.menuIconBarShort}  />
            <Box sx={styles.menuIconBar} />


  



        </Stack>
    )
}

export default MenuIcon
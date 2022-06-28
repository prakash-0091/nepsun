import React from 'react'
import { Box } from '@mui/system'
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BasicSelect from './BasicSelect'
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputBase, Stack } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';


const locations = ['ktm', 'lpt', 'pkh', 'brt']
const categories = ['electronics', 'sports', 'automobiles', 'music', 'music', 'music']



const NavSearch = () => {

    const smallDevice = useMediaQuery('(max-width:1010px)');

    const extraSmallDevice = useMediaQuery('(min-width:571px)');


    return (

        <Stack flex={1} justifyContent='center'>
            {
                !smallDevice ?
                    < Stack justifyContent='center' direction='row' alignItems='center' pb={1} >
                        <Button  >
                            <SystemUpdateAltIcon fontSize='large' />Download The App
                        </Button>
                    </Stack > : ""
            }
            <Box>
                <Stack direction='row' justifyContent='center' pl={4} pr={4} >
                    <Stack direction='row' alignItems='center' >
                        <LocationOnIcon />
                        <BasicSelect datas={locations} />
                    </Stack>
                    <Stack direction='row'>
                        <BasicSelect datas={categories} />
                        {
                            extraSmallDevice ?
                                <Stack pl={3} pr={3}  >
                                    <Button disableFocusRipple endIcon={<SearchIcon />}>
                                        <InputBase required fullWidth placeholder='search...' />
                                    </Button>
                                </Stack>
                                : ""
                        }
                    </Stack>

                </Stack>
                {
                    !extraSmallDevice ?
                        <Stack pl={3} pr={3}  >
                            <Button disableFocusRipple endIcon={<SearchIcon />}>
                                <InputBase required fullWidth placeholder='search...' />
                            </Button>
                        </Stack>
                        : ""
                }
            </Box>
        </Stack >

    )
}

export default NavSearch
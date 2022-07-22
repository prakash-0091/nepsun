import { Avatar, Stack } from '@mui/material'
import React from 'react'

const MessageSent = ({message}) => {
    return (
        <Stack direction='row' spacing={1} alignItems='center' justifyContent='flex-end'>
            <div className='message sent'>
                {message.message}
            </div>
            <Avatar ></Avatar>
        </Stack>
    )
}

export default MessageSent
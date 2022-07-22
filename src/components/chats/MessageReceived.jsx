import { Avatar, Stack } from '@mui/material'
import React from 'react'

const MessageReceived = ({message}) => {
  return (
    <Stack direction='row' spacing={1} alignItems='center' >
        <Avatar ></Avatar>
        <div className='message received' >
            {message.message}
        </div>
    </Stack>
  )
}

export default MessageReceived
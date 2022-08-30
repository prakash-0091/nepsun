import { Button, Grid, InputBase, Stack } from '@mui/material'
import React, { useState, useEffect } from 'react'

import './chats.css'

import SendIcon from '@mui/icons-material/Send';

import io from 'socket.io-client'
import MessageSent from './MessageSent';
import MessageReceived from './MessageReceived';

import ScrollToBottom from 'react-scroll-to-bottom'



// const socket = io.connect("http://localhost:3001")

// const Chats = () => {

//     const [chatRoomNo, setChatRoomNo] = useState('')

//     const [currentMessage, setCurrentMessage] = useState("");
//     const [messageList, setMessageList] = useState([]);


//     const joinRoom = () => {
//         socket.emit("join_room", chatRoomNo)
//     }


//     const sendMessage = async () => {
//         if (currentMessage !== "") {
//             const messageData = {
//                 room: chatRoomNo,
//                 author: socket.id,
//                 message: currentMessage,
//                 time:
//                     new Date(Date.now()).getHours() +
//                     ":" +
//                     new Date(Date.now()).getMinutes(),
//             };

//             await socket.emit("send_message", messageData);
//             setMessageList((list) => [...list, messageData]);
//             setCurrentMessage("");
//         }
//     };

//     useEffect(() => {
//         socket.on("receive_message", (data) => {
//             setMessageList((list) => [...list, data]);
//         });
//     }, [socket]);

//     return (
//         <Stack direction='row' spacing={1}>
//             <Grid container>
//                 <Grid item xs={3}>
//                     Users list
//                 </Grid>
//                 <Grid
//                     item xs={9}
//                     className='chat-box'

//                 >
//                     <Stack direction='column' >
//                         <Stack direction='row'  >

//                             <h3  >Chatroom:
//                                 <InputBase sx={{
//                                     backgroundColor: 'rgba(221, 212, 212, 0.726)',
//                                     borderRadius: 5,
//                                     padding: 1,
//                                     marginLeft: 1
//                                 }}
//                                     value={chatRoomNo}
//                                     onChange={e => setChatRoomNo(e.currentTarget.value)}
//                                     placeholder='chatroom id'
//                                 />
//                             </h3>
//                             <Button sx={{
//                                 minWidth: '100px'
//                             }} onClick={joinRoom} >Join</Button>
//                         </Stack>





//                         <Stack flex={1} direction='column' spacing={1} className="message-content">
//                             <ScrollToBottom className='scroll-to-btm'  >
//                                 {

//                                     messageList.map(message => {
//                                         if (message.author === socket.id) {
//                                             return (
//                                                 <MessageSent message={message} />
//                                             )
//                                         } else {
//                                             return (
//                                                 <MessageReceived message={message} />
//                                             )
//                                         }
//                                     })
//                                 }
//                             </ScrollToBottom>
//                         </Stack>

//                         <Button sx={{
//                             display: 'flex',
//                             justifyContent: 'space-between'
//                         }}
//                             disableFocusRipple
//                             disableRipple
//                             endIcon={<SendIcon sx={{ padding: 1 }} fontSize="large" onClick={sendMessage} />}
//                         >
//                             <InputBase
//                                 placeholder='message...'
//                                 value={currentMessage}
//                                 onChange={e => setCurrentMessage(e.currentTarget.value)}
//                                 onKeyPress={e => {
//                                     e.key === 'Enter' && sendMessage()
//                                 }}
//                                 fullWidth
//                             />
//                         </Button>
//                     </Stack>
//                 </Grid>
//             </Grid>
//         </Stack>
//     )
// }

// export default Chats
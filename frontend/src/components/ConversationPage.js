import React, {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const ConversationPage = () => {

    const [conversation, setConversation] = useState({messages: []});
    const {id} = useParams()

    useEffect(() => {
        getConversations();
    }, [])

    useEffect(() => {
        console.log(conversation.messages);
    }, [conversation])

    const getConversations =  () => {
        fetch(`http://localhost:5000/conversations/${id}`)
        .then(res => res.json())
        .then(data => setConversation(data))
      }

    return(
        <div>
         {conversation.messages.map((message) => {
            return(
                <div key={message._id} className='conversation'>
                    <p>Author</p>
                    <p >{message.content}</p>
                    <p>Date</p>
                </div>
            )
         })}
        <div className='uploadmessage'><br></br>
         <p style={{color: 'white'}}>Please state your message</p><br></br>
         <TextField
         id="message"
         label="Message"
         type=""
         sx={{mb: "3vh", width: "70%", backgroundColor: "white"}}
         ></TextField><br></br>
        <Button
        variant="contained"
        sx={{ height: "7vh", mb: "10vh", backgroundColor: "#A891C1", "&:hover": { backgroundColor: "#383B7E" } }}
        >Upload</Button>
        </div>
        </div>
    )
    
}

export default ConversationPage;
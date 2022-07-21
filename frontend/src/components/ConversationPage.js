import React, {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';

const ConversationPage = () => {

    const [conversation, setConversation] = useState({author: [], contenu: [], date: []});
    const {id} = useParams()

    useEffect(() => {
        getConversations();
    }, [])

    const getConversations =  () => {
        fetch(`http://localhost:5000/conversations/${id}`)
        .then(res => res.json())
        .then(data => setConversation(data))
      }

    return(
        <div>
            {conversation.author.map((author, index) => {
                return(
                    <div key={index} className='conversation'>
                        <p>{author}</p>
                        <p>{conversation.contenu[index]}</p>
                        <p>{conversation.date[index]}</p>
                    </div>
                )
            })}
        </div>
    )
    
}

export default ConversationPage;
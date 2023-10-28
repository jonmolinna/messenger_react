import React, { useCallback, useEffect, useState } from 'react';
import Message from './Message';
import axios from '../utils/axios';
import { useMessageDispatch } from '../context/message.context';

const Messages = ({ token }) => {
    const dispatch = useMessageDispatch();
    const [messages, setMessages] = useState(null);

    const getAllMessage = useCallback(async () => {
        try {
            let options = {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=utf-8",
                    "authorization": `Bearer ${token}`,
                },
            }

            const res = await axios('messages', options);
            setMessages(res.data.messages);
        } catch (err) {
            dispatch({
                type: 'GET_ALL_MESSAGE_FAILURE',
                payload: err.response.data.errors,
            })
        }
    }, [dispatch, token]);

    useEffect(() => {
        getAllMessage();
    }, [getAllMessage]);

    return (
        <div className='px-3 py-6 space-y-10'>
            {
                messages && messages.map(message => (
                    <Message key={message._id} message={message} />
                ))
            }
        </div>
    )
};

export default Messages;
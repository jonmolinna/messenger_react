import React, { useState } from 'react';
import { MdOutlineInsertEmoticon } from 'react-icons/md';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { FaMicrophone } from 'react-icons/fa';
import axios from '../utils/axios';
import { useMessageDispatch } from '../context/message.context';

const Footer = () => {
    const [message, setMessage] = useState('');
    const dispatch = useMessageDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=utf-8",
                    "authorization": "Bearer"
                },
                data: JSON.stringify({ message }),
            };

            const res = await axios('addMessage', options);
            console.log('RESS', res)
            setMessage('');
        } catch (err) {
            dispatch({
                type: 'ADD_MESSAGE_FAILURE',
                payload: err.response.data.errors
            })
        }
    };

    return (
        <div className='flex items-center px-5 py-4 space-x-2 border-t-2'>
            <button>
                <MdOutlineInsertEmoticon className='w-6 h-6 text-gray-500' />
            </button>
            <form className='flex-1' onSubmit={handleSubmit}>
                <input
                    type="text"
                    className='w-full border-none bg-gray-100 focus:ring-0 rounded-md'
                    placeholder='Escribe un mensaje'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    className='hidden'
                    disabled={!message}
                >
                    Send
                </button>
            </form>
            <button>
                <AiOutlinePaperClip className='w-6 h-6 text-gray-500' />
            </button>
            <button>
                <FaMicrophone className='w-6 h-6 text-gray-500' />
            </button>
        </div>
    )
};

export default Footer;
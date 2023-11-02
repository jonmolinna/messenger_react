import React from 'react';
import { capilizeLetter } from '../utils/capitalize.letter';
import moment from 'moment';
import 'moment/locale/es';
import { useAuthState } from '../context/auth.context';

const Message = ({ message }) => {
    const { user } = useAuthState();
    let isUsername = message.username.username === user.username;

    return (
        <p className={`relative text-base p-2 w-fit rounded-md ${isUsername ? 'bg-pink-700' : 'bg-pink-400'} text-white ${isUsername && 'ml-auto'} shadow-md`}>
            <span className='absolute -top-5 font-semibold text-xs text-black'>
                {capilizeLetter(message.username.name)}
            </span>
            {message.message}
            <span className='ml-2 text-xs'>
                {moment(message.createdAt).format('l @ LT')}
            </span>
        </p >
    )
}

export default Message
import React from 'react';
import { capilizeLetter } from '../utils/capitalize.letter';
import moment from 'moment';
import 'moment/locale/es';

const Message = ({ message }) => {

    return (
        <div className='relative'>
            <span className='absolute -mt-4 text-xs font-semibold'>
                {capilizeLetter(message.username.name)}
            </span>
            <p className='text-white px-2 py-2 text-base max-w-fit bg-pink-700 rounded-md'>
                {message.message}
            </p>
            <span className='absolute text-xs font-semibold text-gray-500'>
                {moment(message.createdAt).format('MMMM DD, YYYY @ h:mm a')}
            </span>
        </div>
    )
}

export default Message
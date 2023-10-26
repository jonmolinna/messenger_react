import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { useAuthDispatch, useAuthState } from '../context/auth.context';
import { capilizeLetter } from '../utils/capitalize.letter';
import { useMessageDispatch } from '../context/message.context';

const Header = () => {
    const dispatchAuth = useAuthDispatch();
    const dispatchMesaage = useMessageDispatch();

    const { user } = useAuthState();

    const handleLogout = () => {
        dispatchAuth({
            type: 'LOGOUT'
        });
        dispatchMesaage({
            type: 'MESSAGE_LOGOUT'
        });
    };

    return (
        <div className='flex items-center py-5 px-4 bg-pink-700 rounded-t-md'>
            <button
                className='text-white mr-2'
                onClick={() => handleLogout()}
            >
                <BiLogOut className='w-6 h-6' />
            </button>
            <p className='flex-1 text-center text-white font-medium truncate'>{capilizeLetter(user.name)}</p>
        </div>
    )
};

export default Header;
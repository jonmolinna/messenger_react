import React from 'react'

const Message = () => {
    return (
        <div className='bg-pink-700 rounded-md max-w-fit relative'>
            <span className='absolute -mt-4 text-xs font-semibold'>
                Kendra Contreras
            </span>
            <p className='text-white px-2 py-2 text-base'>
                This is a message Lorem ipsum dolor sit amet.
            </p>
            <span className='absolute text-xs font-semibold text-gray-500'>
                fecha
            </span>
        </div>
    )
}

export default Message
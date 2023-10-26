import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div>
                <h1 className='text-center font-semibold text-2xl'>Oops!</h1>
                <p className='text-center'>Lo sentimos, ha ocurrido un error inesperado.</p>
                <p className='text-center'>{error.status} || {error.statusText}</p>
            </div>
        </div>
    )
};

export default ErrorPage;
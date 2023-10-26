import React from 'react';
import Header from '../components/Header';
import Messages from '../components/Messages';
import Footer from '../components/Footer';
import { useMessageState } from '../context/message.context';

const Home = () => {
    const { errors } = useMessageState();
    return (
        <div className='min-h-full px-3 border border-pink-900x'>
            {
                errors && (
                    <div className='max-w-md mx-auto my-1 p-2 text-sm text-red-800 rounded-lg bg-red-50'>
                        <p className='text-center font-medium'>
                            No tienes permiso, Inicia sessión
                        </p>
                    </div>
                )
            }
            <div className='bg-white max-w-md h-[90vh] mx-auto mt-5 shadow-md rounded-md'>

                <div className='flex flex-col h-full'>
                    <div>
                        <Header />
                    </div>
                    <div className='flex-1 max-h-fit overflow-y-scroll scrollbar-thin scrollbar-thumb-pink-500'>
                        <Messages />
                    </div>
                    <div className=''>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;
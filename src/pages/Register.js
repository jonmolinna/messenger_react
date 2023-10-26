import React, { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { POST_ADD_USER } from '../utils/config';
import validateFormRegister from '../utils/validate.form.register';
import { Link } from 'react-router-dom';

const initialForm = {
    name: "",
    username: "",
    password: "",
    confirm_password: "",
};

const endpoint = POST_ADD_USER;

const Register = () => {
    const { form, errors, loading, handleChange, handleBlur, handleSubmit, data } = useForm(initialForm, endpoint, validateFormRegister);

    useEffect(() => {
        return () => { };
    }, [])

    return (
        <div className='min-h-full px-3'>
            <div className='bg-white max-w-md mx-auto mt-10 shadow-md p-7 rounded-md'>
                <div className='flex justify-center'>
                    <p className='font-semibold text-lg'>
                        Crea tu cuenta
                    </p>
                </div>
                {
                    data && (
                        <div className='my-1 p-2 text-sm text-green-800 rounded-lg bg-green-50'>
                            <p className='text-center font-medium'>
                                Usuario creado con exito
                            </p>
                        </div>
                    )
                }
                <form
                    className='mt-8 space-y-3'
                    onSubmit={handleSubmit}
                >
                    <div className='flex flex-col'>
                        <label htmlFor="name">Nombres</label>
                        <input
                            type="text"
                            name='name'
                            id='name'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={form.name}
                            className='border-pink-300 focus:ring-pink-400 focus:border-pink-400'
                        />
                        <div>
                            {
                                errors?.name && (
                                    <span className='text-sm font-medium text-red-700'>
                                        {errors.name}
                                    </span>
                                )
                            }
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="username">Usuario</label>
                        <input
                            type="text"
                            name='username'
                            id='username'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={form.username}
                            placeholder='Ejm. dallase37'
                            className='border-pink-300 focus:ring-pink-400 focus:border-pink-400'
                        />
                        <div>
                            {
                                errors?.username && (
                                    <span className='text-sm font-medium text-red-700'>
                                        {errors.username}
                                    </span>
                                )
                            }
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            name='password'
                            id='password'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={form.password}
                            className='border-pink-300 focus:ring-pink-400 focus:border-pink-400'
                        />
                        <div>
                            {
                                errors?.password && (
                                    <span className='text-sm font-medium text-red-700'>
                                        {errors.password}
                                    </span>
                                )
                            }
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="confirm_password">Confirma Contraseña</label>
                        <input
                            type="password"
                            name='confirm_password'
                            id='confirm_password'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={form.confirm_password}
                            className='border-pink-300 focus:ring-pink-400 focus:border-pink-400'
                        />
                    </div>
                    <div>
                        <button
                            className='bg-pink-700 w-full rounded-md py-2 text-white disabled:bg-pink-500'
                            disabled={!(form.name && form.username && form.password && form.confirm_password) || loading || !(Object.keys(errors) < 1)}
                        >
                            {
                                loading ? 'Cargando ...' : 'Crea tu Cuenta'
                            }
                        </button>
                    </div>
                </form>
            </div >
            <div className='bg-white max-w-md mx-auto mt-9 shadow-md p-7 rounded-md space-y-3 mb-10'>
                <p className='text-center'>
                    ¿Tienes una cuenta?
                </p>
                <Link to='/login' className='block'>
                    <button
                        className='border border-pink-700 w-full py-2 text-pink-700'
                    >
                        Inicia Sesión
                    </button>
                </Link>
            </div>
        </div >
    )
};

export default Register;
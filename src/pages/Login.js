import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { POST_AUTH } from '../utils/config';
import { useForm } from '../hooks/useForm';
import validateFormAuth from '../utils/validate.form.auth';
import { useAuthDispatch, useAuthState } from '../context/auth.context';

const initialForm = {
    username: "",
    password: ""
};

const endpoint = POST_AUTH;

const Login = () => {
    const { form, data, errors, loading, handleChange, handleBlur, handleSubmit } = useForm(initialForm, endpoint, validateFormAuth);
    const dispatch = useAuthDispatch();
    const { user } = useAuthState();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch({ type: 'LOGIN', payload: data?.user })
    }, [data?.user, dispatch]);

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user]);

    useEffect(() => {
        return () => { }
    }, [])

    return (
        <div className='min-h-full px-3'>
            <div className='bg-white max-w-md mx-auto mt-14 shadow-md p-7 rounded-md'>
                <div className='flex justify-center'>
                    <p className='font-semibold text-lg'>
                        Iniciar sesión
                    </p>
                </div>
                {
                    errors?.message && (
                        <div className='my-1 p-2 text-sm text-red-800 rounded-lg bg-red-50'>
                            <p className='text-center font-medium'>
                                {errors?.message}
                            </p>
                        </div>
                    )
                }
                <form
                    className='mt-8 space-y-3'
                    onSubmit={handleSubmit}
                >
                    <div className='flex flex-col'>
                        <label htmlFor="username">Usuario</label>
                        <input
                            type="text"
                            name='username'
                            id='username'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={form.username}
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
                    <div>
                        <button
                            className='bg-pink-700 w-full rounded-md py-2 text-white disabled:bg-pink-500'
                            disabled={!(form.username && form.password) || loading}
                        >
                            {
                                loading ? 'Cargando' : 'Iniciar Sesión'
                            }
                        </button>
                    </div>
                </form>
            </div>
            <div className='bg-white max-w-md mx-auto mt-9 shadow-md p-7 rounded-md space-y-3'>
                <p className='text-center'>
                    ¿Aún no tienes una cuenta?
                </p>
                <Link to='/register' className='block'>
                    <button className='border border-pink-700 w-full py-2 text-pink-700'>
                        Crea tu Cuenta
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default Login;
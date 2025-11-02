'use client'

import userStore from '@/app/Store/userStore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type User = {
    email : string,
    password : string
}

const Login = () => {
    const { login, error ,user : currentUser ,  googleSignIn } = userStore() as { login: (user: User) => void , googleSignIn : () => void}
    let [ user , setUser] = useState<User>({
        email : '',
        password : ''
    })

    const router = useRouter(); 

    useEffect(() => {
        if (currentUser === undefined) return;
        if (currentUser) {
            router.replace('/');
        }
    }, [currentUser, router])

    let handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    let handleSubmit  =(e : React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        login(user)
    }

    let handleGoogleSignIn = () => {
        googleSignIn()
    }
    return (
        <div className='container-center'>
            <h1 className='text-5xl text-center py-20'>Login page </h1>
            <form className='bg-white border flex items-center justify-center max-w-md flex-col gap-4 p-8 m-auto my-4' onSubmit={handleSubmit}>
                <input className='border p-6 px-8 text-gray-500 ' onChange={(e)=> handleChange(e)} name='email' type="email" placeholder='Email Address' />
                <input className='border p-6 px-8 text-gray-500 ' onChange={(e)=> handleChange(e)} name='password' type="password" placeholder='Password' />
                <button className='border p-6 rounded-md bg-green-500 text-white w-full' type='submit '>Login</button>
                <button className='border p-6 rounded-md gap-6 cursor-pointer  w-full flex items-center justify-center' onClick={handleGoogleSignIn}>
                    <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="" />
                    <span>
                        Sign in with Google
                    </span>
                </button>
            </form>
            {error && <p className='text-red-500 text-center py-7'>{error.message}</p>}
            <div className="py-5">
                <p className='text-center text-gray-500'>Don&apos;t have an account?  <Link href={'/auth/signup'} className='text-green-500 cursor-pointer'>Signup</Link></p>
            </div>

        </div>
    );
};

export default Login;
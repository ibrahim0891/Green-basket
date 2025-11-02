'use client'

 
import userStore from '@/app/Store/userStore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'; 

type User = {
    email: string,
    password: string,
    photoUrl: string,
    displayName: string
}

const SignUp = () => {
    const {user : currentUser  , error, register , googleSignIn} = userStore()
    const router = useRouter();
    useEffect(() => {
            if (currentUser === undefined) return;
            if (currentUser) {
                router.replace('/');
            }
        }, [currentUser, router])

        
    let [user, setUser] = useState<User>({
        email: '',
        password: '',
        photoUrl: '',
        displayName: ''
    })

    let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    let handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        register(user)
    }

    let handleGoogleSignIn = () => {
        googleSignIn()
    }
    return (
        <div className='container-center'>
            <h1 className='text-5xl text-center py-20'> Signup </h1>

            {error && <p className='text-red-500 text-center'>{error.message}</p>}

            <form className='bg-white border flex items-center justify-center max-w-md flex-col gap-4 p-8 m-auto my-12' onSubmit={handleSubmit}>
                <input className='border p-6 px-8 text-gray-500 ' onChange={(e) => handleChange(e)} name='displayName' type="text" placeholder='Full name' required />
                <input className='border p-6 px-8 text-gray-500 ' onChange={(e) => handleChange(e)} name='photoUrl' type="text" placeholder='Photo URL' required />
                <input className='border p-6 px-8 text-gray-500 ' onChange={(e) => handleChange(e)} name='email' type="email" placeholder='Email Address' required />
                <input className='border p-6 px-8 text-gray-500 ' onChange={(e) => handleChange(e)} name='password' type="password" placeholder='Password' required />
                <button className='border p-6 rounded-md bg-green-500 text-white w-full' type='submit'>Login</button>
                <button className='border p-6 rounded-md gap-6 cursor-pointer  w-full flex items-center justify-center' onClick={handleGoogleSignIn}>
                    <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="" />
                    <span>
                        Sign in with Google
                    </span>
                </button>
            </form>
            <div className="py-5">
                <p className='text-center text-gray-500'>Already have an account? <Link href={'/auth/login'} className='text-green-500 cursor-pointer'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;
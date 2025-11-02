'use client'


import React, { useEffect } from 'react'; 
import userStore from './Store/userStore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebaseClient';

const RootLayout = ({children} : {children: React.ReactNode}) => {
    const {  setUser } = userStore()

    useEffect(() => {
        let subscribe =  onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return () => subscribe()
    },[setUser])
    return (
        <>
         {children}   
        </>
    );
};

export default RootLayout;
'use client'

import React, { useEffect } from 'react';
import userStore from './Store/userStore';
import { usePathname, useRouter } from 'next/navigation';
import { User } from 'firebase/auth';

const Protected = ({ children, redirect = '/auth/login' }: { children: React.ReactNode, redirect: string }) => {
    const { user } = userStore() as {user : User}
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (user === undefined) return;
        if (!user) {
            router.replace(`${redirect}?next=${pathname}`);
        }  
    }, [])
    return (
        <>
            {children}
        </>
    );
};

export default Protected;
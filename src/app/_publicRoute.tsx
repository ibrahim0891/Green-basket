'use client';
import React, { useEffect } from 'react';
import userStore from './Store/userStore';
import { useRouter } from 'next/navigation';

const PublicRoute = ({ children, redirect = ' /' }: { children: React.ReactNode, redirect?: string }) => {
    const { user } = userStore()
    const router = useRouter();

    useEffect(() => {
        if (user === undefined) return;
        if (user) {
            router.replace(redirect);
        }
    }, [user, redirect])
    return (
        <>
            {children}
        </>
    );
};

export default PublicRoute;
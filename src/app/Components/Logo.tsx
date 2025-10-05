
'use client'
import { PlantIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import React from 'react';

const Logo = ({ color }: { color?: string }) => {
    return (
        <Link href={'/'}>
            <div className='flex items-center gap-2 text-green-500 text-2xl '>
                <PlantIcon weight='fill' /> <span className={color ?? 'text-black'}> Ecobazar </span>
            </div>
        </Link>

    );
};

export default Logo;

'use client'
import { PlantIcon } from '@phosphor-icons/react';
import React from 'react';

const Logo = ({color} : {color ?: string}) => {
    return (
        <div className='flex items-center gap-2 text-green-500 text-2xl '>
            <PlantIcon weight='fill' /> <span className={color ?? 'text-black'}> Ecobazar </span>
        </div>

    );
};

export default Logo;
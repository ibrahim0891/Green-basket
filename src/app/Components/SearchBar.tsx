
'use client'

import { MagnifyingGlassIcon } from '@phosphor-icons/react';import Link from 'next/link';
 ;
import React, { useState } from 'react';

const SearchBar = () => {
    let [userInput, setUserInput] = useState<string>('')
    

    let handleSubmit = (e) => {
        e.preventDefault(); 
    }

    return (
        <div className='hidden lg:block'>
            <form onSubmit={(e) => handleSubmit(e)} className='flex items-center border border-gray-200 rounded-lg overflow-hidden'>
                <MagnifyingGlassIcon className='mx-3' />
                <input type="search" placeholder='search' name='search' onChange={(e)=> setUserInput(e.target.value)} className='focus:outline-none py-2' />
                <button className='bg-green-500 text-white px-6 py-2'> <Link href={{pathname:'/search' , query:{query: userInput}}}> Search </Link> </button>
            </form>
        </div>
    );
};

export default SearchBar;
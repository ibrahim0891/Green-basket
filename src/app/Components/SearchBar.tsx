
'use client'

import { MagnifyingGlassIcon, XIcon } from '@phosphor-icons/react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';

const SearchBar = ({ setIsSearchOpen , recentSearch , setRecentSearch }: { setIsSearchOpen: React.Dispatch<boolean>  , recentSearch : string[] , setRecentSearch: React.Dispatch<sring[]>} ) => {
    let [userInput, setUserInput] = useState<string>('')
    const router = useRouter();



    //read existing search 
    useEffect(() => {
        let recentData = localStorage.getItem('recent-search') 
        let parsedData = recentData  ? JSON.parse(recentData)  : []
        setRecentSearch(parsedData)
    }, [])



    useEffect(() => {

    })

    let handleSubmit = (e) => {
        e.preventDefault();
        setIsSearchOpen(false)
        if (userInput == '' || userInput.length == 0) return;
        router.push('/search?query=' + userInput)
        
        let updateData = [...new Set([...recentSearch , userInput])]
        setRecentSearch(updateData)
        localStorage.setItem('recent-search' , JSON.stringify(updateData))
        
        setTimeout(() => {
            setIsSearchOpen(false)
        }, 0);
    }

    return (


        <div className=' flex sm:hidden lg:block p-3 m-2 md:m-0 md:p-0'>
            <form onSubmit={(e) => handleSubmit(e)} className='flex bg-white items-center border border-gray-200 rounded-sm overflow-hidden w-full'>
                <div>
                    <MagnifyingGlassIcon className='mx-3' />
                </div>
                <input autoFocus type="search" placeholder='search' name='search' onChange={(e) => setUserInput(e.target.value)} className='focus:outline-none py-2 w-full md:w-auto' />
                <button className='bg-green-500 text-white px-6 py-2 hidden md:block' onClick={(e) => handleSubmit(e)}>  Search </button>
                <button className=' p-3 border-r border-gray-200 md:hidden' onClick={(e) => handleSubmit(e)}>  <MagnifyingGlassIcon /> </button>
                <button className=' p-3 md:hidden' onClick={() => setIsSearchOpen(false)}>   <XIcon /> </button>
            </form>
        </div>
    );
};

export default SearchBar;
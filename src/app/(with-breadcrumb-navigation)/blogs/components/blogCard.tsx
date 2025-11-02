
'use client'

import React from 'react';
import { Blog } from '../page';
import { ArrowRightIcon,   TagIcon, UsersIcon } from '@phosphor-icons/react';
import Link from 'next/link';

export const CategoryAndAuthor = ({ category, author }: { category: string, author: string }) => {
    return <div className='flex items-center gap-4 text-green-500'>
        <div className='flex items-center gap-2'>  <TagIcon /> <span className='text-md text-green-500'> {category} </span></div>
        <div className='flex items-center gap-2'>  <UsersIcon /> <span className='text-md text-green-500'> {author} </span></div>
    </div>
}

const BlogCard = ({ blog }: { blog: Blog }) => {
    let { id, author , date: { day, month }, category, title } = blog
    return (
        <div className='rounded-md overflow-hidden border border-gray-200'>
            <div className='bg-gray-100 w-full aspect-[3/2]   rounded-md flex items-center object-cover justify-center text-gray-400 relative '>
                <p>Image</p>
                <div className='absolute bottom-0 left-0 m-2 rounded-sm text-xs text-center bg-white text-gray-700 border p-2 border-gray-100'>
                    <h2> {day}</h2>
                    <h2> {month}</h2>
                </div>
            </div>
            <section className='p-6 space-y-2.5'>
                <div className='space-y-2.5'>
                    <CategoryAndAuthor category={category} author={author}/>
                    <p className='text-md font-semibold text-ellipsis'>
                        {title}
                    </p>
                </div>
                <Link href={{ pathname: '/blogs/' + id }} className='text-green-600 flex items-center gap-4' >Read more <ArrowRightIcon /> </Link>
            </section >
        </div>
    );
};

export default BlogCard;
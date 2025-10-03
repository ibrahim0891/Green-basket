

import React from 'react';
import { Blog } from '../page';
import FieldTitle from '../../category/server-components/FieldTitle';
import RecentBlogDate from './RecentBlogDate';
import axiosInstance from '@/app/lib/axios';
import Link from 'next/link';

const RecentBlogs = async () => {
    let res = await axiosInstance.get('/api/blogs')
    let { blogs } = res.data

    return (
        <>
            <FieldTitle name='Recent blogs' />
            {
                blogs?.slice(0, 4)?.map((blog: Blog) => {
                    let { date, title , id } = blog
                    return <div key={blog.id} className='flex items-center gap-4 p-4 border border-gray-100 mb-4 rounded-md'>
                        <div className='w-16 bg-gray-200 aspect-square rounded-md flex-nowrap'>

                        </div>
                        <Link href={'/blogs/'+id}>
                            <div className='text-sm space-y-2'>
                                <h2 className='text-md font-light'>

                                    {title.slice(0, 35)}...
                                </h2>
                                <RecentBlogDate date={date} />
                            </div>
                        </Link>
                    </div>
                })
            }
        </>
    );
};

export default RecentBlogs;
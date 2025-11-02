

import React from 'react';
import FilterButton from '../category/client-componets/FIlterButton';
import FieldTitle from '../category/server-components/FieldTitle';
import axiosInstance from '@/app/lib/axios';
import BlogCard from './components/blogCard';
import { AxiosResponse } from 'axios';
import BlogSection from './components/blogSection';
import RecentBlogs from './components/RecentBlogs'; 

export type Blog = {
    id: number;
    image: string;
    date: {
        day: string;
        month: string;
    };
    category: string;
    author: string;
    comments: number;
    title: string;
    description: string;
};

export const OurGallary = () => {
    return <div className="mb-10">
        <FieldTitle name="Our Gallary" />
        <div className='grid grid-cols-4 gap-4'>
            {new Array(8).fill('').map((value, index) => {
                return <div key={index} className='bg-gray-100 aspect-square rounded-md border border-gray-200 object-cover'></div>
            })}
        </div>
    </div>
}

export const PopularTags = () => {
    return <div>
        <FieldTitle name="Popular tags" />
        <div className="">
            <span className="bg-gray-200 hover:bg-green-500 text-gray-600 hover:text-white duration-150 px-3 py-1 rounded-full m-2 inline-block"> Meat </span>
            <span className="bg-gray-200 hover:bg-green-500 text-gray-600 hover:text-white duration-150 px-3 py-1 rounded-full m-2 inline-block"> vegetabel </span>
            <span className="bg-gray-200 hover:bg-green-500 text-gray-600 hover:text-white duration-150 px-3 py-1 rounded-full m-2 inline-block"> Soft drinks </span>
            <span className="bg-gray-200 hover:bg-green-500 text-gray-600 hover:text-white duration-150 px-3 py-1 rounded-full m-2 inline-block"> Cleaning items </span>
            <span className="bg-gray-200 hover:bg-green-500 text-gray-600 hover:text-white duration-150 px-3 py-1 rounded-full m-2 inline-block"> Food </span>
            <span className="bg-gray-200 hover:bg-green-500 text-gray-600 hover:text-white duration-150 px-3 py-1 rounded-full m-2 inline-block"> Grocery </span>
        </div>
    </div>
}
const BlogPage = async () => {
    let res: AxiosResponse = await axiosInstance.get('/api/blogs')
    let { blogs } = res.data 

  
    return (
        <div className='min-h-screen'>
            <div className='container-center py-10'>

                <div className="grid grid-cols-[1fr_3fr] gap-8 hidden">
                    <div>
                        <FilterButton />
                    </div>
                    <div className="flex items-center justify-between ">

                        <div>
                            <span> Sort by: </span>
                            <select className="border  px-4 py-2 border-gray-200">
                                <option value="latest">Latest</option>
                                <option value="oldest">Oldest</option>
                            </select>
                        </div>
                        <div> {`{ number }`} Result Found</div>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:grid grid-cols-[1fr_3fr] gap-8 ">

                    <aside>

                       
                        <OurGallary/>

                        <PopularTags/>

                        <RecentBlogs  />
                    </aside>
                    <div>

                        <BlogSection blogs={blogs} />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default BlogPage;
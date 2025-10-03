


import React from 'react';
import BlogCard from './blogCard';
import { Blog } from '../page';

const BlogSection = ({ blogs }: { blogs: Blog[] }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                blogs.map((blog, index) => {
                    return <BlogCard blog={blog} key={index} ></BlogCard>
                })
            }
        </div>
    );
};

export default BlogSection;
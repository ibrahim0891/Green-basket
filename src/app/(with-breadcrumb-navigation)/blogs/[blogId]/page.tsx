//temporary marking as client compoentn 



import axiosInstance from '@/app/lib/axios';
import React, { use } from 'react';
import { Blog, OurGallary, PopularTags } from '../page';
import { CategoryAndAuthor } from '../components/blogCard';
import AuthorInfoSection from '../components/AuthorInfoSection';
import { url } from 'inspector';
import Button from '@/app/Components/Button';
import RecentBlogDate from '../components/RecentBlogDate';
import RecentBlogs from '../components/RecentBlogs';



const BlogPage = async ({ params }) => {
    let { blogId } = await params
    let res = await axiosInstance.get('/api/blogs/' + blogId)
    let blog: Blog = res.data

    let { description, title, author, category, date: { day, month } } = blog

    return (
        <div>
            <div className='container-center py-8'>
                <div className='grid grid-cols-[3fr_1fr] gap-8'>
                    <section className='space-y-6'>
                        <div className='bg-gray-200 aspect-[3/1]'>

                        </div>
                        <div>
                            <CategoryAndAuthor category={category} author={author} />
                        </div>

                        <h1 className='text-4xl font-semibold py-2'>
                            {title}
                        </h1>

                        <div>
                            <AuthorInfoSection authorInfo={{ name: author, date: { day, month } }} />
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold'> {title} </h3>
                            <p className='whitespace-pre-wrap py-6 text-gray-600 text-xl'>
                                {description}
                            </p>
                            <div className='py-4'>
                                <div className='w-full py-16 px-14 bg-[url(/ads-banner-bg.png)] bg-cover rounded-md'>
                                    <div className='text-white space-y-4'>
                                        <span className='text-gray-200 text-lg'> SUMMER SALE </span>
                                        <h1 className='text-5xl font-semibold'>Fresh Fruits</h1>
                                        <Button label='Shop now' className='px-12'></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <PopularTags />
                        <OurGallary />
        
                        <RecentBlogs/>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
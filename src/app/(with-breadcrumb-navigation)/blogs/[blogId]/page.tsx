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
    // let { blogId } = await params
    // let res = await axiosInstance.get('/api/blogs/' + blogId)
    // let blog: Blog = res.data

    // let { description, title, author, category, date: { day, month } } = blog

    return (
        <div>
            {/* <div className='container-center py-8'>
                <div className='flex flex-col lg:grid grid-cols-[3fr_1fr] gap-8'>
                    <section className='space-y-6'>
                        <div className='bg-gray-200 aspect-[3/2] md:aspect-[3/1] flex items-center justify-center'>
                            <p className='text-gray-400 text-sm'>image</p>
                        </div>
                        <div>
                            <CategoryAndAuthor category={category} author={author} />
                        </div>

                        <h1 className='hidden lg:text-4xl font-semibold py-2'>
                            {title}
                        </h1>

                        <div>
                            <AuthorInfoSection authorInfo={{ name: author, date: { day, month } }} />
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold'> {title} </h3>

                            <p className='whitespace-pre-wrap py-6 text-gray-600 text-base font-light lg:text-xl leading-loose'>
                                {description}
                            </p>

                            <div className='py-4'>
                                <div className='w-full py-16 px-8 lg:px-14 bg-[url(/ads-banner-bg.png)] bg-cover bg-no-repeat rounded-md'>
                                    <div className='text-white space-y-4'>
                                        <span className='text-gray-200 text-lg'> SUMMER SALE </span>
                                        <h1 className='text-xl lg:text-5xl font-semibold'>Fresh Fruits</h1>
                                        <Button label='Shop now' className='px-8 lg:px-12'></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <PopularTags />
                        <OurGallary />
                        <RecentBlogs />
                    </section>
                </div>
            </div> */}
        </div>
    );
};

export default BlogPage;
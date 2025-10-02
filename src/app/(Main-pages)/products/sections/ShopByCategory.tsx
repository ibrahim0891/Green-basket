/* eslint-disable @next/next/no-img-element */


import React from 'react';
import type { Category } from '../components/categories';
import SectionHeader from '../components/SectionHeader';
import Link from 'next/link';
import axiosInstance from '@/app/lib/axios';



const ShopByCategory = async () => {
    const res = await axiosInstance.get('/api/categories')
    const { categories } = res.data
    return (
        <div className='py-14 container-center space-y-6'>
            <SectionHeader smallText='Categories' title='Shop by categories' />
            <div className='grid grid-cols-6 gap-6'>
                {
                    categories?.map((category: Category, index: number) => {
                        const { id, image, name  } = category;
                        return (
                            <Link className="w-full " key={index} href={{ pathname: `/category/${name}`, query: { id: id } }}>

                                <div key={id} className='py-9 px-3 hover:shadow hover:shadow-green-500 cursor-pointer rounded-lg flex flex-col gap-4 border border-gray-200 hover:border-green-500 duration-150 '>
                                    <img src={image} className="m-auto block" alt='' />
                                    <p className='text-center text-lg'>
                                        {name}
                                    </p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ShopByCategory;

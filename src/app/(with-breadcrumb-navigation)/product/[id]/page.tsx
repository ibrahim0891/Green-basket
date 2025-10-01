/* eslint-disable @next/next/no-img-element */
'use client'
import axiosInstance from '@/app/lib/axios';
import ProductCard, { Product } from '@/app/products/components/ProductCard';
import { FacebookLogoIcon, InstagramLogoIcon, MinusIcon, PinterestLogoIcon, PlusIcon, StarIcon, TwitterLogoIcon } from '@phosphor-icons/react';
import React, { use, useState } from 'react';

let res = await axiosInstance.get('/api/products')

const ProductDetails = ({ params }) => {
    let [selectCount, setSelectCount] = useState<number>(0)

    let handleSelectCountMinus = () => {
        if (selectCount <= 0) {
            setSelectCount(0)
            return;
        } else {
            setSelectCount(prev => prev - 1)
        }
    }
    let handleSelectCountPlus = () => {
        console.log('hllo');
        if (selectCount >= 10) {
            setSelectCount(10)
            return;
        } else {
            setSelectCount(prev => prev + 1)
        }
    }

    let {id} = use(params)
    let productList = res.data

    let { products } = productList
    let currentProduct = products.filter((item) => item.id == id)

    let [item]: [Product] = currentProduct

    return (
        <div>
            <div className='container-center py-10'>

                <div className='flex items-center *:w-1/2'>
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                    <div>
                        <div className='space-y-4'>
                            <h1 className='text-4xl font-semibold'> {item.name} </h1>
                            <div className='flex items-center'>
                                {new Array(5).fill('').map((value, index) => {
                                    return <div className='text-amber-400' key={index}>
                                        <StarIcon weight={Math.floor(item.rating) < index + 1 ? 'regular' : 'fill'} />
                                    </div>
                                })}
                                <span className='ml-2'> {item.rating} </span>
                            </div>
                        </div>
                        <div className='text-2xl my-4'>
                            <span className='line-through text-gray-400'> {item.oldPrice} </span>
                            <span className=' text-green-700'> ${item.price} </span>
                        </div>
                        <div className='border border-gray-200'></div>

                        <section className='flex items-center justify-between text-lg my-3 '>
                            <span>Brand</span>
                            <div className='flex items-center'>
                                <span className='mr-2'>share item: </span>
                                <div className='flex items-center text-2xl *:hover:bg-green-500 *:hover:text-white *:rounded-full *:p-4 ' >
                                    <span>
                                        <FacebookLogoIcon weight='regular'></FacebookLogoIcon>
                                    </span>
                                    <span>
                                        <TwitterLogoIcon weight='fill'></TwitterLogoIcon>
                                    </span>
                                    <span>

                                        <InstagramLogoIcon weight='fill'></InstagramLogoIcon>
                                    </span>
                                    <span>
                                        <PinterestLogoIcon weight='fill'></PinterestLogoIcon>
                                    </span>
                                </div>

                            </div>
                        </section>
                        <p className='text-gray-400 my-3'>
                            {item.description}
                        </p>
                        <div className='border-y border-gray-200 py-3 my-2 flex items-center gap-4'>
                            <div className='bg-white flex items-center border rounded-full p-2 gap-3 '>
                                <button className='p-2 bg-gray-200 rounded-full' onClick={() => handleSelectCountMinus()}>
                                    <MinusIcon></MinusIcon>
                                </button>
                                <span> {selectCount} </span>
                                <button className='p-2 bg-gray-200 rounded-full' onClick={() => handleSelectCountPlus()}>
                                    <PlusIcon />
                                </button>
                            </div>
                            <button className='flex-1 bg-green-500 text-white py-2 text-lg rounded-full'>
                                Add to cart
                            </button>
                        </div>
                        <div className='py-2 flex items-center gap-2'>
                            <span>Tags:</span> {item.tags.map((tag, index) => {
                                return <span className='p-1 px-3 bg-gray-100 text-gray-500  rounded-full mx-2' key={index}> {tag} </span>
                            })}
                        </div>
                    </div>

                </div>
                <div className='my-10'>
                    <h1 className='text-3xl font-semibold text-center mb-4'> Releated Products  </h1>
                    <div className='grid grid-cols-5 gap-4'>
                        {
                            products.filter((product) => product.categoryId == item.categoryId).slice(0, 5).map((item, index) => {
                                return <ProductCard product={item} key={index} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
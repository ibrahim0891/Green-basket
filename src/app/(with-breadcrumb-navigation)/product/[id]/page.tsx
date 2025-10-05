/* eslint-disable @next/next/no-img-element */

import axiosInstance from '@/app/lib/axios';
import ProductCard, { Product } from '@/app/(Main-pages)/products/components/ProductCard';
import React from 'react';
import ShareItems from '../components/shareItems';
import ReviewSection from '../components/ReviewSection';
import RatingStars from '@/app/Components/RatingStars';
import AddToCart from '../components/AddToCart';
import ProductInfoSection from '../components/ProductInfoSection';
import AdditionalInformation from '../components/AdditionalInformation';
import DescriptionSection from '../components/DescriptionSection';

export type Review = {
    id: number,
    productId: number,
    user: string,
    comment: string,
    date: string,
    rating: number
}

const ProductDetails = async ({ params }: { params: { id: number } }) => {
    let { id } = await params

    let res = await axiosInstance.get('/api/product-details/' + id)
    let reviewRes = await axiosInstance.get('/api/review/' + id)

    let currentProductReview = reviewRes.data
    let item: Product = res.data

    let productCategoryId: number = item.categoryId
    let relatedProductRes = await axiosInstance.get(`/api/products/related-product/${productCategoryId}`)

    let relatedProducts = relatedProductRes.data

    return (
        <div>
            <div className='container-center py-10'>

                <div className='flex items-center flex-col lg:flex-row justify-center *:lg:w-1/2'>
                    <div className='flex items-center justify-center aspect-square w-full lg:w-fit lg:aspect-auto'>
                        <img className='h-full' src={item.image} alt="" />
                    </div>
                    <div className='lg:max-w-[648px] w-full'>
                        <div className='space-y-4'>
                            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold'> {item.name} </h1>
                            <div className='flex items-center'>
                                <RatingStars starCount={item.rating} />
                                <span className='ml-2'> {item.rating} </span>
                            </div>
                        </div>
                        <div className='text-2xl my-4'>
                            <span className='line-through text-gray-400 text-lg'> ${item.oldPrice} </span>
                            <span className=' text-green-700'> ${item.price} </span>
                            <span className='bg-amber-500 font-black text-white p-1 px-2 rounded-md text-xs'>
                                {(((item.oldPrice - item.price) / item.oldPrice)*100).toFixed(0)}% off
                            </span>
                        </div>

                        <div className='border border-gray-200'></div>

                        <ShareItems item={item} />

                        <p className='text-gray-400 my-3'>
                            {item.description}
                        </p>

                        <AddToCart item={item} />
                        <div className='py-2 flex items-center gap-2 overflow-auto'>
                            <span>Tags:</span> {item?.tags?.map((tag, index) => {
                                return <span className='p-1 px-3 bg-gray-100 text-gray-500  text-nowrap rounded-full mx-2' key={index}> {tag} </span>
                            })}
                        </div>
                    </div>

                </div>

                <ProductInfoSection
                    reviewSection={<ReviewSection reviewData={currentProductReview} />}
                    additionalInformation={< AdditionalInformation />}
                    descriptionSection={<DescriptionSection />}
                />


                <div className='my-10'>
                    <h1 className='text-3xl font-semibold text-center my-8'> Releated Products  </h1>
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                        {
                            relatedProducts.map((item: Product, index: number) => {
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
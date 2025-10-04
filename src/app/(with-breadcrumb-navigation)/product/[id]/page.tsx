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
    date: Date,
    rating: number
}

const ProductDetails = async ({ params }: { params: { id: number } }) => {
    let res = await axiosInstance.get('/api/products')
    let reviewRes = await axiosInstance.get('/api/review')
    let { id } = await params

    let { products } = res.data
    let { reviews } = reviewRes.data

    let currentProductReview = reviews.filter((review: Review) => review.productId == id)


    let item: Product = products.find((item: Product) => item.id == id)


    return (
        <div>
            <div className='container-center py-10'>

                <div className='flex items-center flex-col lg:flex-row justify-center *:lg:w-1/2'>
                    <div className='flex items-center justify-center aspect-square w-full lg:w-fit lg:aspect-auto'>
                        <img className='h-full' src={item.image} alt="" />
                    </div>
                    <div className='lg:max-w-[648px]'>
                        <div className='space-y-4'>
                            <h1 className='text-4xl font-semibold'> {item.name} </h1>
                            <div className='flex items-center'>
                                <RatingStars starCount={item.rating} />
                                <span className='ml-2'> {item.rating} </span>
                            </div>
                        </div>
                        <div className='text-2xl my-4'>
                            <span className='line-through text-gray-400'> {item.oldPrice} </span>
                            <span className=' text-green-700'> ${item.price} </span>
                        </div>
                        <div className='border border-gray-200'></div>

                        <ShareItems item={item} />

                        <p className='text-gray-400 my-3'>
                            {item.description}
                        </p>

                        <AddToCart item={item} />
                        <div className='py-2 flex items-center gap-2'>
                            <span>Tags:</span> {item?.tags?.map((tag, index) => {
                                return <span className='p-1 px-3 bg-gray-100 text-gray-500  rounded-full mx-2' key={index}> {tag} </span>
                            })}
                        </div>
                    </div>

                </div>

                <ProductInfoSection  
                    reviewSection={<ReviewSection reviewData={currentProductReview}/>}
                    additionalInformation={< AdditionalInformation/>}
                    descriptionSection={<DescriptionSection/>}
                />


                <div className='my-10'>
                    <h1 className='text-3xl font-semibold text-center my-8'> Releated Products  </h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                        {
                            products.filter((product: Product) => product.categoryId == item.categoryId).slice(0, 5).map((item, index) => {
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
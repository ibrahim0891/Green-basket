'use client'
import { Product } from '@/app/(Main-pages)/home/components/ProductCard';
import { FacebookLogoIcon, InstagramLogoIcon, TwitterLogoIcon, PinterestLogoIcon } from '@phosphor-icons/react';
import React from 'react';

const ShareItems = ({ item }: { item: Product }) => {
    return (
        <section className='flex items-center justify-between text-lg my-3 '>
            <span>Brand : <span className='font-semibold'>{item.brand}</span></span>
            <div className='hidden md:flex items-center'>
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
    );
};

export default ShareItems;
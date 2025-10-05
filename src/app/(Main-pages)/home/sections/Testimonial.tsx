/* eslint-disable @next/next/no-img-element */
'use client'

import { QuotesIcon } from '@phosphor-icons/react';
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import RatingStars from '@/app/Components/RatingStars';

let testimonialData = [
    {
        "id": 1,
        "avater": "https://xsgames.co/randomusers/assets/avatars/male/6.jpg" ,
        "quote_icon": "green_double_quotes",
        "testimonial": "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        "customer": {
            "name": "Robert Fox",
            "title": "Customer",
            "avatar_url": "",
            "rating": 5
        }
    },
    {
        "id": 1,
        "avater": "https://xsgames.co/randomusers/assets/avatars/male/6.jpg" ,
        "quote_icon": "green_double_quotes",
        "testimonial": "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        "customer": {
            "name": "Robert Fox",
            "title": "Customer",
            "avatar_url": "",
            "rating": 5
        }
    },
    {
        "id": 2,
        "avater": "https://img.freepik.com/free-photo/close-up-smiley-woman-outdoors_23-2149002410.jpg" ,
        "quote_icon": "green_double_quotes",
        "testimonial": "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        "customer": {
            "name": "Dianne Russell",
            "title": "Customer",
            "avatar_url": "",
            "rating": 5
        }
    },
    {
        "id": 3,
        "avater": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmbP0Sbc_1ueT5iBU9RzqhE_rz5KpJlb-Dw&s" ,
        "quote_icon": "green_double_quotes",
        "testimonial": "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        "customer": {
            "name": "Eleanor Pena",
            "title": "Customer",
            "avatar_url": "",
            "rating": 5
        }
    }
]

const Testimonial = () => {
    return (
        <div className='bg-gray-100 py-8 my-8'>
            <div className='container-center'>
                <SectionHeader smallText='Client testimonial' title='What Our Client Says' />
                <div className='grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6 mt-8'>

                    {
                        testimonialData.map((item) => {
                            return <div key={item.id} className='bg-white rounded-md p-6 space-y-4 '>
                                <div className='text-green-400'>
                                    <QuotesIcon size={36} />
                                </div>
                                <p>
                                    {item.testimonial}
                                </p>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <img src={item.avater} alt="" className='w-14 aspect-square object-cover object-center rounded-full' />
                                        <div className=''>
                                            <p className='text-xl text-gray-800 '>
                                                {item.customer.name}
                                            </p>
                                            <p className='text-gray-500'>
                                                {item.customer.title}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <RatingStars starCount={4} />
                                    </div>
                                </div>

                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
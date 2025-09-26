/* eslint-disable @next/next/no-img-element */


import React from 'react';
import Image from "next/image";

const OurFeatures = () => {
    const features = [
        {
            title: "Free Shipping",
            subTitle: "Free shipping with discount",
            icon: '/features/Icon.png',
        },
        {
            title: "Great Support 24/7",
            subTitle: "Instant access to Contact",
            icon: '/features/Icon-1.png',
        },
        {
            title: "100% Secure Payment",
            subTitle: "We ensure your money is save",
            icon: "/features/Icon-2.png",
        },
        {
            title: "Money-Back Guarantee",
            subTitle: "30 days money-back",
            icon: "/features/Icon-3.png",
        },
    ];
    return (
        <div> 
            <section className='container-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-b-2 border-gray-200'>
                    {features.map((item, index) => {
                        return (
                            <div
                                className={
                                    "transition-all flex gap-4 px-6 py-10 items-center justify-center hover:border-b-7 hover:border-b-primary"
                                }
                                key={index}
                            >
                                <img
                                    src={item.icon}
                                    className='w-[72px]'
                                    alt=''
                                />
                                <div className='space-y-2'>
                                    <h4 className='text-md text-nowrap font-semibold'>
                                        {item.title}
                                    </h4>
                                    <p className='text-gray-500 text-sm'>
                                        {item.subTitle}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default OurFeatures;



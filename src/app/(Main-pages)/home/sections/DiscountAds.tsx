/* eslint-disable @next/next/no-img-element */
import React from 'react';

const DiscountAds = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-between py-10 *:w-full *:aspect-auto *:rounded-2xl container-center'>
            <img className='' src="/discount-ad/Bannar.png" alt="" draggable='false' />
            <img className='' src="/discount-ad/Bannar-1.png" alt=""  draggable='false'/>
            <img className='hidden md:block' src="/discount-ad/Bannar-2.png" alt="" draggable='false'/>
        </div>
    );
};

export default DiscountAds;
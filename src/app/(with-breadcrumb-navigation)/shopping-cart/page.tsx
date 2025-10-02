import React from 'react';
import SectionHeader from '../../(Main-pages)/products/components/SectionHeader';
import axiosInstance from '@/app/lib/axios';

let res = await axiosInstance.get('/api/products')
let productList = res.data

const ShoppingCart = () => {

    return (
        <div>
            <div className='container-center py-10'>
                <SectionHeader smallText='' title='My shopping cart' />
            </div>
        </div>
    );
};

export default ShoppingCart;

import React from 'react';
import SectionHeader from '../../(Main-pages)/home/components/SectionHeader';
import axiosInstance from '@/app/lib/axios';
import CartTable from './component/cartTable';

const ShoppingCart = async () => {
    let res = await axiosInstance.get('/api/products')
    let { products } = res.data

    return (
        <div>
            <div className='container-center py-10'>
                <SectionHeader smallText='' title='My shopping cart' />

                <CartTable productList={products} />
            </div>
        </div>
    );
};

export default ShoppingCart;
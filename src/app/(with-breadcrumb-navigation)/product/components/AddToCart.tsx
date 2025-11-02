


'use client'

import { Product } from '@/app/(Main-pages)/home/components/ProductCard';
import userStore from '@/app/Store/userStore';
import { MinusIcon, PlusIcon } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export type Cart = {
    id: number,
    count: number
}

const AddToCart = ({ item }: { item: Product }) => {
    const { user } = userStore()
    console.log(user);
    const { brand, categoryId, id, price, name, stockStatus } = item
    const [selectCount, setSelectCount] = useState<number>(0);

    const [cart, setCart] = useState<Cart[]>([]);

    useEffect(() => {
        let cartString = localStorage.getItem('cart')
        let parsedCart = cartString ? JSON.parse(cartString) : []
        setCart(parsedCart)
    }, [])

    useEffect(() => {
        let matchedIndex = cart.findIndex((cartItem) => cartItem.id == id)
        if (matchedIndex != -1) {
            setSelectCount(prev => cart[matchedIndex].count)
        }
    }, [cart])


    const handleSelectCountMinus = () => {
        setSelectCount(prev => Math.max(prev - 1, 0));
    };

    const handleSelectCountPlus = () => {
        setSelectCount(prev => Math.min(prev + 1, 10));
        if (selectCount == 10) {
            toast.warning('Maximum 10 items can be bought at a time!')
        }
    };

    const handleAddToCart = (id) => {
        if (selectCount === 0) return;

        let cartString = localStorage.getItem('cart')
        let parsedCart = cartString ? JSON.parse(cartString) : []

        let matchedIndex = parsedCart.findIndex((cartItem: Cart) => cartItem.id == id)

        if (matchedIndex != -1) {
            parsedCart[matchedIndex] = { count: selectCount, id }
            localStorage.setItem('cart', JSON.stringify([...parsedCart]))
            toast.success(name + ' added to cart!')
        } else {
            let newCart = {
                count: selectCount, id
            }
            toast.success(name + ' added to cart!')
            localStorage.setItem('cart', JSON.stringify([...parsedCart, newCart]))
        }
    };
    return (
        <div className='border-y border-gray-200 py-3 my-2 flex items-center gap-4'>
            <ToastContainer position='bottom-right' />
            <div className='bg-white flex items-center border rounded-full p-2 gap-3 '>
                <button className='p-2 bg-gray-200 rounded-full' onClick={() => handleSelectCountMinus()}>
                    <MinusIcon></MinusIcon>
                </button>
                <span> {selectCount} </span>
                <button className='p-2 bg-gray-200 rounded-full' onClick={() => handleSelectCountPlus()}>
                    <PlusIcon />
                </button>
            </div>
            <button className={` ${stockStatus == 'In Stock' ? 'bg-green-500' : "bg-gray-300"} flex-1 text-white py-2 text-lg rounded-full`} onClick={() => handleAddToCart(id)}>
                {stockStatus == 'In Stock' ? 'Add to cart' : 'Item not available'}
            </button>
        </div>
    );
};

export default AddToCart;
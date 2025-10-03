


'use client'

import { Product } from '@/app/(Main-pages)/products/components/ProductCard';
import { MinusIcon, PlusIcon } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export type Cart = {
    id: number,
    count: number
}

const AddToCart = ({ item }: { item: Product }) => {
    const { brand, categoryId, id, price ,name } = item
    const [selectCount, setSelectCount] = useState<number>(0);

    const [cart, setCart] = useState<Cart[]>([]);

    useEffect(() => {
        let cartString = localStorage.getItem('cart')
        let parsedCart = JSON.parse(cartString) ?? []
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
    };

    const handleAddToCart = (id) => {
        if (selectCount === 0) return;

        let cartString = localStorage.getItem('cart')
        let parsedCart = JSON.parse(cartString) ?? []

        let matchedIndex = parsedCart.findIndex((cartItem) => cartItem.id == id)

        if (matchedIndex != -1) {
            parsedCart[matchedIndex] = { count: selectCount, id }
            localStorage.setItem('cart', JSON.stringify([...parsedCart]))
            toast.info(name + ' added to cart!')
        } else {
            let newCart = {
                count: selectCount, id
            }
            localStorage.setItem('cart', JSON.stringify([...parsedCart, newCart]))
        } 
    };
    return (
        <div className='border-y border-gray-200 py-3 my-2 flex items-center gap-4'>
            <ToastContainer/>
            <div className='bg-white flex items-center border rounded-full p-2 gap-3 '>
                <button className='p-2 bg-gray-200 rounded-full' onClick={() => handleSelectCountMinus()}>
                    <MinusIcon></MinusIcon>
                </button>
                <span> {selectCount} </span>
                <button className='p-2 bg-gray-200 rounded-full' onClick={() => handleSelectCountPlus()}>
                    <PlusIcon />
                </button>
            </div>
            <button className='flex-1 bg-green-500 text-white py-2 text-lg rounded-full' onClick={() => handleAddToCart(id)}>
                Add to cart
            </button>
        </div>
    );
};

export default AddToCart;
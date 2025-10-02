


'use client'
 
import { Product } from '@/app/(Main-pages)/products/components/ProductCard';
import { MinusIcon, PlusIcon } from '@phosphor-icons/react';
import React, { useState } from 'react';

const AddToCart = ({item } : {item : Product}) => {
    const {brand , categoryId,id } = item

     let [selectCount, setSelectCount] = useState<number>(0)
    
        let handleSelectCountMinus = () => {
            if (selectCount <= 0) {
                setSelectCount(0)
                return;
            } else {
                setSelectCount(prev => prev - 1)
            }
        }
        let handleSelectCountPlus = () => {
            
            if (selectCount >= 10) {
                setSelectCount(10)
                return;
            } else {
                setSelectCount(prev => prev + 1)
            }
        }
    return (
        <div className='border-y border-gray-200 py-3 my-2 flex items-center gap-4'>
            <div className='bg-white flex items-center border rounded-full p-2 gap-3 '>
                <button className='p-2 bg-gray-200 rounded-full' onClick={() => handleSelectCountMinus()}>
                    <MinusIcon></MinusIcon>
                </button>
                <span> {selectCount} </span>
                <button className='p-2 bg-gray-200 rounded-full' onClick={() => handleSelectCountPlus()}>
                    <PlusIcon />
                </button>
            </div>
            <button className='flex-1 bg-green-500 text-white py-2 text-lg rounded-full'>
                Add to cart
            </button>
        </div>
    );
};

export default AddToCart;
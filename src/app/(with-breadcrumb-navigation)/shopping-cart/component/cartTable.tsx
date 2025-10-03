'use client'

import { Product } from '@/app/(Main-pages)/products/components/ProductCard';

import React from 'react';
import { Cart } from '../../product/components/AddToCart';
import Link from 'next/link';
import { ExternalLinkIcon } from 'lucide-react';
import { EyeIcon } from '@phosphor-icons/react';
import Button from '@/app/Components/Button';

const CartTable = ({ productList }: { productList: Product[] }) => {
    let cartString = localStorage.getItem('cart')
    let cartData = cartString ? JSON.parse(cartString) : null

    let cartProduct: Product[] = cartData.map((cartItem: Cart) => {
        let { count, id } = cartItem
        return productList.find((product) => product.id == id)
    })

    let dataToRender = cartProduct.map((product: Product) => {
        let { price, image, name, id } = product;
        let cartItem: Cart = cartData.find((item) => item.id == id)
        let data = {
            image,
            subTotal: (price * cartItem.count).toFixed(2),
            quantity: cartItem.count,
            name,
            price,
            id
        }
        return data
    })

    let totalPrice = dataToRender.map((item) => Number(item.subTotal)).reduce((a, b) => a + b)



    return (
        <div>
            <div className='flex flex-col my-10 lg:grid grid-cols-[3fr_1.5fr] gap-10 container-center'>

                <table className="w-full border-collapse overflow-auto">
                    <thead>
                        <tr className="text-left text-gray-500   text-xs font-semibold border-b">
                            
                            <th className="py-4 pl-0 pr-6 w-1/3 " colSpan={2} >
                                PRODUCT
                            </th>
                            <th className="py-4 px-6 ">
                                PRICE
                            </th>
                            <th className="py-4 px-6 ">
                                QUANTITY
                            </th>
                            <th className="py-4 pl-6 pr-0 ">
                                SUBTOTAL
                            </th>
                            <th className="py-4 pr-0 w-10">
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataToRender.map((item, index) => {
                            let { image, subTotal, quantity, name, price, id } = item;
                            return <tr key={index} className="border-b last:border-b-0">
                                <td className="py-5 pr-4 pl-0 w-20">
                                    <img src={image} className='w-20 h-20 object-cover rounded' alt={name} />
                                </td>
                                <td className="py-5 px-4 text-gray-800 font-medium">
                                    {name}
                                </td>
                                <td className="py-5 px-6 text-gray-800 font-medium">
                                    {price}$
                                </td>
                                <td className="py-5 px-6 text-gray-800 font-medium">
                                    {quantity}pcs
                                </td>

                                <td className="py-5 pl-6 pr-0 text-gray-800 font-semibold">
                                    {subTotal}
                                </td>
                                <td className="py-5 pl-4 pr-0 w-10">
                                    <Link href={`/product/${id}`}  >
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <EyeIcon size={24} />
                                        </button>
                                    </Link>
                                </td>
                            </tr>

                        })}
                    </tbody>
                </table>

                <div className='border border-gray-200 rounded-xl p-8'>
                    <h1 className='text-3xl font-semibold'>
                        Cart Total
                    </h1>
                    <div className='py-3 my-2 border-b border-gray-200 text-lg text-gray-500 flex items-center justify-between'>
                        <span>
                            Sub total :
                        </span>
                        <span className='font-semibold'>
                            {totalPrice}
                        </span>
                    </div>
                    <div className='py-3 my-2 border-b border-gray-200 text-lg text-gray-500 flex items-center justify-between'>
                        <span>
                            Shipping:
                        </span>
                        <span className='font-semibold'>
                            free
                        </span>
                    </div>
                    <div className='py-3 my-2 border-b border-gray-200 text-lg text-gray-500 flex items-center justify-between'>
                        <span> Total </span>
                        <span className='font-semibold'>
                            {totalPrice}
                        </span>
                    </div>
                    <Button className='my-6 w-full' label='Proceed to Pay'></Button>
                </div>
            </div>
        </div>
    );
};

export default CartTable;
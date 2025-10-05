/* eslint-disable @next/next/no-img-element */
'use client'

import { Product } from '@/app/(Main-pages)/home/components/ProductCard';

import React, { useState, useEffect } from 'react';
import { Cart } from '../../product/components/AddToCart';
import Link from 'next/link';
import { EyeIcon, XCircle } from '@phosphor-icons/react'; // Added XCircle for remove icon
import Button from '@/app/Components/Button';
import { ExternalLinkIcon, XCircleIcon } from 'lucide-react';

interface CartItemData {
    image: string;
    subTotal: number;
    quantity: number;
    name: string;
    price: number;
    id: number;
}

const CartTable = ({ productList }: { productList: Product[] }) => {
    const [cartData, setCartData] = useState<Cart[]>([]);

    useEffect(() => {
        const cartString = localStorage.getItem('cart');
        const initialCartData: Cart[] = cartString ? JSON.parse(cartString) : [];
        setCartData(initialCartData);
    }, []);


    const handleRemoveItem = (idToRemove: number) => {
        const updatedCartData = cartData.filter(item => item.id !== idToRemove);

        localStorage.setItem('cart', JSON.stringify(updatedCartData));

        setCartData(updatedCartData);
    };

    if (!cartData || cartData.length === 0) {
        return (
            <div className='container-center my-20 text-center'>
                <img className='py-0 m-auto' src="https://cdn3.iconfinder.com/data/icons/empty-states-3/600/shopping-genie-cart-whishlist-ecommerce-shop-purchase-add_to_cart-512.png" alt="" srcset="" />
                <h1 className='text-3xl font-semibold mb-4'>Your Cart is Empty!</h1>
                <p className='text-gray-600'>Add some products to your cart to see them here.</p>
                <Link href="/" className='inline-block mt-6'>
                    <Button label='Go to Shop' className='px-6 py-3' />
                </Link>
            </div>
        );
    }



    let cartProduct: (Product | undefined)[] = cartData.map((cartItem: Cart) => {
        return productList.find((product) => product.id == cartItem.id)
    });

    let dataToRender: CartItemData[] = [];

    cartProduct.forEach((product) => {
        if (product) {
            let { price, image, name, id } = product;
            let cartItem: Cart | undefined = cartData.find((item) => item.id == id);

            if (cartItem) {
                let data: CartItemData = {
                    image,
                    subTotal: price * cartItem.count,
                    quantity: cartItem.count,
                    name,
                    price,
                    id
                }
                dataToRender.push(data);
            }
        }
    });

    let totalPrice: number = dataToRender.reduce((total, item) => total + item.subTotal, 0);



    return (
        <div className='my-10 container-center'>
            <div className='flex flex-col md:grid grid-cols-[3fr_1.5fr] gap-10'>

                {/* Main content area for cart items */}
                <div>
                    {/* Mobile View: Card List */}
                    <div className="md:hidden flex flex-col gap-4">
                        {dataToRender.map((item) => (
                            <div key={item.id} className="border border-gray-200 rounded-lg p-4 flex gap-4 ">
                                <img src={item.image} className='w-16 h-16 object-cover rounded' alt={item.name} />
                                <div className="flex-grow flex flex-col justify-center">
                                    <div>
                                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                                        <p className="text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                                    </div>
                                    <p className="font-semibold text-gray-800">${item.subTotal.toFixed(2)}</p>
                                </div>
                                <div className="flex flex-col justify-center items-start gap-3">
                                    <button
                                        onClick={() => handleRemoveItem(item.id)}
                                        className="text-red-400 hover:text-red-600 transition-colors"
                                        title="Remove Item"
                                    >
                                        <XCircleIcon size={18} />
                                    </button>
                                    <Link href={`/product/${item.id}`} title='View Product'>
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <ExternalLinkIcon size={18} />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* Desktop View: Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr className="text-left text-gray-500 font-semibold border-b text-uppercase">
                                    <th className="py-4 pl-0 pr-6 w-1/3" colSpan={2}>PRODUCT</th>
                                    <th className="py-4 px-6">PRICE</th>
                                    <th className="py-4 px-6">QUANTITY</th>
                                    <th className="py-4 pl-6 pr-0">SUBTOTAL</th>
                                    <th className="py-4 pr-0 w-10 text-center">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataToRender.map((item, index) => (
                                    <tr key={index} className="border-b last:border-b-0">
                                        <td className="py-5 pr-4 pl-0 w-20">
                                            <img src={item.image} className='w-20 h-20 object-cover rounded' alt={item.name} />
                                        </td>
                                        <td className="py-5 px-4 text-gray-800 font-medium">{item.name}</td>
                                        <td className="py-5 px-6 text-gray-800 font-medium">${item.price.toFixed(2)}</td>
                                        <td className="py-5 px-6 text-gray-800 font-medium">{item.quantity} pcs</td>
                                        <td className="py-5 pl-6 pr-0 text-gray-800 font-semibold">${item.subTotal.toFixed(2)}</td>
                                        <td className="py-5 pl-4 pr-0 w-10">
                                            <div className="flex items-center gap-4">
                                                <button
                                                    onClick={() => handleRemoveItem(item.id)}
                                                    className="text-red-400 hover:text-red-600 transition-colors"
                                                    title="Remove Item"
                                                >
                                                    <XCircleIcon size={24} />
                                                </button>
                                                <Link href={`/product/${item.id}`} title='View Product' className='hidden sm:block'>
                                                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                                        <EyeIcon size={24} />
                                                    </button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                {/* Cart Total Section */}
                <div className='border border-gray-200 rounded-xl p-8 mt-6 sm:mt-0 h-fit'>
                    <h1 className='text-xl lg:text-3xl font-semibold'>
                        Cart Total
                    </h1>
                    <div className='py-3 my-2 border-b border-gray-200 text-base lg:text-lg text-gray-500 flex items-center justify-between'>
                        <span>Sub total :</span>
                        <span className='font-semibold text-gray-800'>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className='py-3 my-2 border-b border-gray-200 text-base lg:text-lg text-gray-500 flex items-center justify-between'>
                        <span>Shipping:</span>
                        <span className='font-semibold text-gray-800'>Free</span>
                    </div>
                    <div className='py-3 my-2 border-b border-gray-200 text-lg lg:text-xl text-gray-800 flex items-center justify-between font-bold'>
                        <span>Total</span>
                        <span className='font-semibold'>${totalPrice.toFixed(2)}</span>
                    </div>
                    <Button className='my-6 w-full' label='Proceed to Pay'></Button>
                </div>
            </div>
        </div>

    );
};

export default CartTable;
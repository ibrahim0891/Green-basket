/* eslint-disable @next/next/no-img-element */
'use client'

import RatingStars from "@/app/Components/RatingStars";
import { ArrowRightIcon, ShoppingBagIcon, StarIcon } from "@phosphor-icons/react";

import Link from "next/link";

export type Product = {
    id: number,
    name: string,
    images: string[],
    image: string,
    price: number,
    oldPrice: number,
    discount: number,
    stockStatus: "In Stock" | "Out of Stock",
    brand: string,
    categoryId: number,
    tags: string[]
    rating: number,
    description: string

}

const ProductCard = ({ product }: { product: Product }) => {
    const {
        id,
        name,
        rating,
        image,
        price,
        oldPrice,
        categoryId,
    } = product;

    const discount = ((price - oldPrice) / oldPrice) * 100

    return (
        <Link href={{ pathname: `/product/${id}`, query: { categoryId } }} className="block group">
            <div
                className="bg-white border border-gray-100 rounded-lg overflow-hidden h-full flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out"
            >
                <div className="relative aspect-square w-full overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {discount > 0 && (
                        <span className='bg-red-500 font-semibold text-white py-1 px-3 rounded-md text-xs absolute top-3 left-3'>
                            {discount}% OFF
                        </span>
                    )}
                </div>
                <div className="p-4 flex flex-col flex-grow">
                    <div className="flex-grow space-y-2">
                        <h3 className="text-sm font-medium text-gray-700 truncate">{name}</h3>
                        <div className="flex items-center gap-1">
                            <RatingStars starCount={rating} />
                            <span className="text-xs text-gray-500">({rating})</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <p className="text-lg font-semibold text-gray-900">
                            ${price.toFixed(2)}
                            {oldPrice > price && (
                                <span className="ml-2 text-sm text-gray-400 line-through">
                                    ${oldPrice.toFixed(2)}
                                </span>
                            )}
                        </p>
                        <button
                            aria-label="Add to cart"
                            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600 transition-colors"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent link navigation
                                // Add to cart logic here
                                console.log(`Added ${name} to cart`);
                            }}
                        >
                            <ShoppingBagIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;

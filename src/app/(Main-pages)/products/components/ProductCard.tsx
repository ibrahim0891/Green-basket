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

    return (
        <Link href={{ pathname: `/product/${id}`, query: { categoryId } }} >
            <div
                onClick={() => null}
                className=" border border-gray-200 overflow-hidden rounded-md shrink-0 h-full hover:scale-95 transition-all"
            >
                <div className="aspect-[1/1] relative">
                    <img
                        src={image}
                        alt=""
                        className="w-full h-full object-center object-cover"
                    />
                    <span className='bg-amber-500 font-black text-white p-1 px-2 rounded-md text-xs absolute top-0 right-0 m-2'>
                        {(((product.oldPrice - product.price) / product.oldPrice) * 100).toFixed(0)}% off
                    </span>
                </div>
                <div className=" w-full p-3 border-t border-gray-200">
                    <div className="space-y-1">
                        <p className="text-sm md:text-base text-gray-600"> {name}</p>
                        <p className="text-xs md:text-lg space-x-2">
                            <span className="line-through text-gray-400"> {oldPrice}$ </span>
                            <span> {price}$</span>
                        </p>
                        <div className="flex my-1.5 gap-2">
                            <RatingStars starCount={rating} /> <span className="text-xs flex items-center" > {rating} </span>
                        </div>
                        <div className="w-full">
                           <button className="w-full py-2 bg-green-500 rounded-md text-white  text-xs">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;

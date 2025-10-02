/* eslint-disable @next/next/no-img-element */
'use client'

import { ShoppingBagIcon, StarIcon } from "@phosphor-icons/react";
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
    description : string
    
}

const ProductCard = ({ product }: { product: Product }) => {
    const {
        id,
        name,
        rating,
        images,
        image,
        price,
        oldPrice,
        discount, 
        categoryId,
    } = product;

    return (
        <div
            onClick={() => null}
            className=" border border-gray-200 overflow-hidden rounded-2xl shrink-0 h-full hover:ring hover:ring-primary"
        >
            <div className="aspect-[1/1]">
                <img
                    src={image}
                    alt=""
                    className="w-full h-full object-center object-cover"
                />
            </div>
            <div className="flex items-center justify-between p-6">
                <div>
                    <Link href={{pathname : `/product/${id}`  , query: {categoryId}}} >
                        <p className="text-sm text-gray-600"> {name}</p>
                        <p className="text-md">
                            {price}
                            <span className="line-through text-gray-400"> {oldPrice} </span>
                        </p>
                        <div className="flex mt-1.5">
                            {new Array(5).fill("").map((value, index) => {
                                return (
                                    <StarIcon
                                        color="#facc15"
                                        className={`${index < rating ? "text-amber-300" : ""}`}
                                        size={14}
                                        weight={`${index < rating ? "fill" : "regular"}`}
                                        key={index}
                                    />
                                );
                            })}
                        </div>
                    </Link>
                </div>
                <div>
                    <div className="bg-gray-100 p-4 rounded-full">
                        <ShoppingBagIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

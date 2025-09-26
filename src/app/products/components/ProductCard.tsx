/* eslint-disable @next/next/no-img-element */


// this is a fauty cmompnent brought form earlier react version , it needs some fixes to be 
//compatible with nextjs
import { ShoppingBagIcon, StarIcon } from "@phosphor-icons/react";

export type Product = {
    id: number,
    name: string,
    image: string[],
    price: number,
    oldPrice: number,
    discount: number,
    stockStatus: "In Stock" | "Out of Stock",
    brand: string,
    categoryId: number,
    tags: string[]
    ratings: number,
}

const ProductCard = ({ product }: { product: Product }) => {
    const {
        name,
        ratings,
        images,

    } = product;
    return (
        <div
            onClick={() => null}
            className=" border border-gray-200 overflow-hidden rounded-2xl shrink-0 h-full hover:ring hover:ring-primary"
        >
            <div className="aspect-[1/1]">
                <img
                    src={'image'}
                    alt=""
                    className="w-full h-full object-center object-cover"
                />
            </div>
            <div className="flex items-center justify-between p-6">
                <div>
                    <p className="text-sm text-gray-600"> {name}</p>
                    <p className="text-md">
                        {discounted_price}
                        <span className="line-through text-gray-400">{original_price}</span>
                    </p>
                    <div className="flex mt-1.5">
                        {new Array(5).fill("").map((value, index) => {
                            return (
                                <StarIcon
                                    color="#facc15"
                                    className={`${index < rating ? "bg-amber-300" : ""}`}
                                    size={14}
                                    key={index}
                                />
                            );
                        })}
                    </div>
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

import { Icon } from "@phosphor-icons/react";
import { Icons } from "next/dist/lib/metadata/types/metadata-types";
import Link from "next/link";

export interface Category {
    id: number;
    name: string;
    image: string;
    link : string ; 
    productCount : number; 
}




const res = await fetch('http://localhost:3000/api/categories')
const data = await res.json()

import React from 'react';

const Categories = ({ Icon }: { Icon: Icon }) => {
    return (
        <div className="flex flex-col border border-gray-200">
            {data?.categories.slice(0, 8).map((category: Category, index: number) => {
                const { name , id   } = category;
                return <div key={index} className="flex  items-center gap-4 hover:bg-green-500 text-nowrap hover:text-white py-5 px-8">
                    <Icon size={20} />
                    <Link className="w-full " key={index} href={{ pathname: `/category/${name}`  , query: {id : id }}}> {name} </Link>
                </div>

            })}
        </div>
    );
};

export default Categories;
 
import {  JSX } from "react";

export interface Category {
    id: number;
    name: string;
    image: string;
    link: string;
    productCount: number;
}
 
 
const Categories = ({children} : {children: JSX.Element}) => {
    return (
        <div className="flex flex-col border border-gray-200">
           {children}
        </div>
    );
};

export default Categories;
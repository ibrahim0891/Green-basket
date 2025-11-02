import axiosInstance from "@/app/lib/axios"
import { Icon } from "@phosphor-icons/react";
import Link from "next/link";
import { Category } from "../categories"; 

 
let res = await axiosInstance.get('/api/categories')
let data = res.data; 

let CategoryList =   ({Icon}  : {Icon : Icon})  => {
 
  return <div className="">
      {data?.slice(0, 8).map((category: Category, index: number) => {
          const { name, id } = category;
          return <div key={index} className="flex  items-center gap-4 hover:bg-green-500 text-nowrap hover:text-white py-5 px-8">
              <Icon/>
              <Link className="w-full " key={index} href={{ pathname: `/category/${name}`, query: { id: id } }}> {name} </Link>
          </div>

      })}
  </div>
}

export default CategoryList
import { NextRequest, NextResponse } from "next/server";

import allProduct from '@/app/data/products.json'
import { Product } from "@/app/(Main-pages)/products/components/ProductCard";


export function GET(req : NextRequest ){
    let searchParams = req.nextUrl.searchParams; 

    let query : string = searchParams.get('query') ?? "";
    console.log(query)
     
    let result = []

    for (const item of allProduct.products) {
        if (item.name.toLocaleLowerCase().includes(query)) {
            result.push(item)
        }
    }
    return NextResponse.json(result)
}
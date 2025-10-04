import { NextResponse } from "next/server";

import allProduct from '@/app/data/products.json'


export function GET(){
    let featured = allProduct.products.slice(0, 5)
    return NextResponse.json(featured)
}
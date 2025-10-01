import { NextResponse } from "next/server";

import allProduct from '@/app/data/products.json'


export function GET(){
    return NextResponse.json(allProduct)
}
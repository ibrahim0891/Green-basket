import { NextRequest, NextResponse } from "next/server";

import allProduct from '@/app/data/products.json' 

export async function GET(req : NextRequest ){
    let searchParams = req.nextUrl.searchParams; 
    let query : string = searchParams.get('query') ?? "";
         
    let result = []
    for (const item of allProduct.products) {
        if (item.name.toLocaleLowerCase().includes(query)) {
            result.push(item)
        }
    }
    
    return NextResponse.json(result)
}


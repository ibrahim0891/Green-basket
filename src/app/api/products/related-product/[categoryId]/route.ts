import { Product } from "@/app/(Main-pages)/products/components/ProductCard";
import allProduct from "@/app/data/products.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    context: { params: { categoryId: number } }
) {
    let { categoryId } = await context.params;

    let reletedProduct = allProduct.products
        .filter((product) => product.categoryId == categoryId)
        .slice(0, 5);
    console.log(reletedProduct);
    return NextResponse.json(reletedProduct);
}

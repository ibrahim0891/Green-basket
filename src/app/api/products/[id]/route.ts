
import allproduct from "@/app/data/products.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    context: {
        params: {
            id: number;
        };
    }
) {
    const { id } = await context.params;
    let { products } = allproduct;

    const product = products.find((product) => product.id == id);
    return NextResponse.json(product);
}

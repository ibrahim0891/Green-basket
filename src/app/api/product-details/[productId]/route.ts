import allProduct from "@/app/data/products.json";
import { Product } from "@/app/(Main-pages)/products/components/ProductCard";
import { NextRequest, NextResponse } from "next/server";

type Params = { productId: number };

export async function GET(request: NextRequest, context: { params: Params }) {
    let { productId } = await context.params;

    let selectedProduct = allProduct.products.find((product) => {
        return product.id == productId;
    });

    if (!selectedProduct) {
        return NextResponse.json({ error: "Item not found" });
    }

    return NextResponse.json(selectedProduct);
}

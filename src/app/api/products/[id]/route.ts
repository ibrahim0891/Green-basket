import allproduct from "@/app/data/products.json";
import { NextResponse } from "next/server";

type Param = {
    id: number;
};

export async function GET(request: Request, { params }: { params: Param }) {
    const { id } = await params;
    let { products } = allproduct; // {products: [{},{}...]}

    const product = products.find((product) => product.id == id);
    return NextResponse.json(product);
}

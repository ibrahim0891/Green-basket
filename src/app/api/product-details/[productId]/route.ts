 
import { dbConnect } from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import productSchema from "../../schema/productSchema";

type Params = { productId: number };

export async function GET(request: NextRequest, context: { params: Params }) {
    let { productId } = await context.params;
    await dbConnect(); 

    let selectedProduct =  await productSchema.findOne({ id: productId });

    if (!selectedProduct) {
        return NextResponse.json({ error: "Item not found" });
    }

    return NextResponse.json(selectedProduct);
}

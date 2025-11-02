 
import productSchema from "@/app/api/schema/productSchema";
import { dbConnect } from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    context: { params: { categoryId: number } }
) {
    let { categoryId } = await context.params;

    await dbConnect(); 
     
    let reletedProduct = await productSchema
        .find({ categoryId: categoryId })
        .limit(5);
    console.log(reletedProduct);
    return NextResponse.json(reletedProduct);
}

import { NextRequest, NextResponse } from "next/server"; 
import reviewSchema from "../../schema/reviewSchema";
import { dbConnect } from "@/app/lib/mongodb";

export async function GET(
    request: NextRequest,
    context: { params: { productId: number } }
) {
    await dbConnect()
    let { productId } = await context.params;
     
    try {
        let selectedProductReview = await reviewSchema.find({productId : productId})
        return NextResponse.json( selectedProductReview);
    } catch (error) {
        console.log({error});
    }

    
}

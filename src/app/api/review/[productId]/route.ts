import { NextRequest, NextResponse } from "next/server";
import allReviews from "@/app/data/reviews.json";
import { Review } from "@/app/(with-breadcrumb-navigation)/product/[id]/page";

export async function GET(
    request: NextRequest,
    context: { params: { productId: number } }
) {
    let { productId } = await context.params;
    let selectedProductReview: Review[] = allReviews.reviews.filter(
        (review) => review.productId == productId
    ); 
    return NextResponse.json( selectedProductReview);
}

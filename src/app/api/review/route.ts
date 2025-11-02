import { NextResponse } from "next/server"; 
import { dbConnect } from "@/app/lib/mongodb";
import reviewSchema from "../schema/reviewSchema";

export async function GET(){
    await dbConnect()
    let allReviews = await reviewSchema.find()

    return NextResponse.json(allReviews)
}
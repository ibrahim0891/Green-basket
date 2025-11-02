import { NextResponse } from "next/server";
  
import { dbConnect } from "@/app/lib/mongodb";
import productSchema from "../../schema/productSchema";


export async function GET(){
    await dbConnect()
    let featured = await productSchema.find().limit(5)
    return NextResponse.json(featured)
}
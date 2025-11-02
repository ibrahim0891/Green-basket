import { NextResponse } from "next/server";

 
import { dbConnect } from "@/app/lib/mongodb";
import productSchema from "../schema/productSchema";


export async function GET(){
    await dbConnect(); 
    let allProduct = await productSchema.find()
    return NextResponse.json(allProduct)
}
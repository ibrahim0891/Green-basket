 
import { dbConnect } from '@/app/lib/mongodb'
import { NextResponse } from 'next/server'
import categorySchema from '../schema/categorySchema'

export async function GET(){
    await dbConnect()
    let categories = await categorySchema.find()
    return NextResponse.json(categories)
}
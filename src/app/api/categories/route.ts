
import categories from '@/app/data/category.json'
import { NextResponse } from 'next/server'

export async function GET(){
    return NextResponse.json(categories)
}
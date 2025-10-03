import blogs from '@/app/data/blogs.json'
import { NextResponse } from 'next/server'


export function GET(){
    return NextResponse.json(blogs)
}
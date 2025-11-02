import blogs from '@/app/data/blogs.json'
import { dbConnect } from '@/app/lib/mongodb'
import { NextResponse } from 'next/server'
import blogSchema from '../schema/blogSchema'


export async function GET(){
    await dbConnect() 
    const blogs = await blogSchema.find()
    console.log(blogs);
    return NextResponse.json(blogs)
}
import { NextRequest, NextResponse } from "next/server"; 
import { dbConnect } from "@/app/lib/mongodb";
import blogSchema from "../../schema/blogSchema";

export async function GET(
    request: NextRequest,
    context: { params: { blogId: number } }
) {
 
    let { blogId } = context.params;
    await dbConnect();
    let selectedBlog = await blogSchema.findOne({ id: blogId });
    return NextResponse.json(selectedBlog);
}

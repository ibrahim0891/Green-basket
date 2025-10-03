import { NextRequest, NextResponse } from "next/server";
import allBlogs from "@/app/data/blogs.json";

export async function GET(
    request: NextRequest,
    context: { params: { blogId: number } }
) {
    let { blogId } = context.params;
    let { blogs } = allBlogs;
    let selectedBlog = blogs.find((blog) => blog.id == blogId);
    return NextResponse.json(selectedBlog);
}

import { getWordpressBlogs } from "@/functions/blogs/get-wordpress-blogs";
import { generateErrorResponse, handleCatchBlock } from "@/functions/common";
import { NextRequest, NextResponse } from "next/server";

export interface GetBlogsApiRequestData {
    page?: number,
    category?: number,
}

export async function POST (request: NextRequest) {
    try {
        const body = await request.json() as GetBlogsApiRequestData;

        const page = body.page || 1;

        const blogs = await getWordpressBlogs({
            page,
            category: body.category,
        })

        return NextResponse.json(blogs);

    } catch (err) {
        const message = handleCatchBlock(err);
        const response = generateErrorResponse(message);
        return response;
    }
}
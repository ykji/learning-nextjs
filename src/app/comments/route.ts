import { comments } from "./data";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const requestHeaders = new Headers(request.headers);
  console.log("new Headers ->", requestHeaders.get("Authorization"));

  const headersList = headers();
  console.log("next/headers ->", headersList.get("Authorization"));

  const filteredComment = query ? comments.filter((comment) => comment.text.toLowerCase().includes(query.toLowerCase())) : comments;

  return Response.json(filteredComment);
}

export async function POST(request: Request) {
  const comment = await request.json();

  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

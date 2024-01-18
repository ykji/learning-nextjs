import { comments } from "./data";
import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const requestHeaders = new Headers(request.headers);
  console.log("new Headers ->", requestHeaders.get("Authorization"));

  const headersList = headers();
  console.log("next/headers ->", headersList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log({ theme });

  cookies().set("limit", "20");
  console.log("way 2 cooies ->", cookies().get("limit"));

  const filteredComment = query ? comments.filter((comment) => comment.text.toLowerCase().includes(query.toLowerCase())) : comments;

  // return Response.json(filteredComment);

  return new Response("<h1>This is comments data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
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

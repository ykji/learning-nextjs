import { NextResponse, type NextRequest } from "next/server";

// custom matcher config way

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/profile",
// };

// conditional way

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/hello", request.url));
//   }
// }

// cookies in middleware
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  console.log({ response });

  const themePref = request.cookies.get("theme");

  if (!themePref) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-headers", "custom-value");

  return response;
}

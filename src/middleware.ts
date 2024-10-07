import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAdministrator, verifyToken } from "./lib/utils/auth";

const protectedRoutes = ["/class/create", "/character", "/dashboard"];
const adminRoutes = ["/admin", "/admin/messages"];

export async function middleware(req: NextRequest) {
  const isAuthenticated = await verifyToken();

  // administator routes can only be accessed by me
  if (!isAuthenticated && adminRoutes.includes(req.nextUrl.pathname)) {
    const isAdmin = await isAdministrator();
    if (!isAdmin) {
      const absoluteURL = new URL("/not-found", req.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
    }
  }
  // protected routes can only be accessed by logged in users
  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/login", req.nextUrl.origin);
    // Append the original pathname as a query parameter
    console.log(req.nextUrl.pathname);
    absoluteURL.searchParams.set("redirect", req.nextUrl.pathname);
    console.log(absoluteURL.toString());
    return NextResponse.redirect(absoluteURL.toString());
  }
}

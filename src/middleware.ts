import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUserId, isAdministrator, verifyToken } from "./lib/utils/auth";
import { getCharacter } from "./lib/actions/db/character/read.actions";

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
    return NextResponse.redirect(absoluteURL.toString());
  }
}

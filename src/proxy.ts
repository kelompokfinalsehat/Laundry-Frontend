import { NextRequest, NextResponse } from "next/server";

const protectedPrefixes = [
  "/beranda",
  "/request-pickup",
  "/pesanan",
  "/alamat",
  "/profil",
  "/notifikasi",
  "/internal",
];

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const hasSession = Boolean(request.cookies.get("popo_session"));
  
  // const isProtected = false;

  const isProtected = protectedPrefixes.some((prefix) =>
    pathname.startsWith(prefix),
  );
  
  if (isProtected && !hasSession) {
    const login = new URL("/login", request.url);
    login.searchParams.set("intended_url", `${pathname}${search}`);
    return NextResponse.redirect(login);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
